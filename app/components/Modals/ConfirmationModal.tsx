import React, { Component } from 'react';
import { View, Modal, StyleSheet, Dimensions, Pressable, StatusBar } from 'react-native';
import { Button } from '../Buttons/Button';
import {RegularText, BoldText} from '../Typography/Typography';
// import CONSTANTS from '../../utils/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface Props {
    navigation?: any;
    store?: any;
}
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const ConfirmationModal: React.FC<Props> = (props: Props) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);

    const proceed = ()=> {
        props.store.positiveModalCallback(props.store.arg1, props.store.arg2);
        props.store.resetModal();
    }
    // render() {
        return (
            // <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={props.store.modalVisible}
                    onRequestClose={() => {
                        // this.props.store.setModalVisible(false);
                        props.store.resetModal()
                    }}
                    hardwareAccelerated = {true}
                >
                    <Pressable style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <BoldText size={28} title={props.store.modalTitle || 'Confirmation'} />
                            <RegularText size={28} title={props.store.modalMsg || 'Do you want to proceed?'} lines={10} />
                            <View style={{flexDirection: 'row', marginTop: 40}}>
                                <Button title="Cancel" color={theme.light[400]} style = {[ {width: '50%', marginRight: 5}]} onPress = {props.store.resetModal} />
                                <Button title="Proceed" color={theme.primary.main} rippleColor={theme.light.main} style = {[{width: '50%', marginLeft: 5}]} onPress = {proceed} textColor={theme.light.main} />
                            </View>
                        </View>
                    </Pressable>
                </Modal>
            // </View>
        )
    // }
}

const styles = StyleSheet.create({
    centeredView: {
    //   flex: 1,
      justifyContent: "center",
      alignItems: "center",
    //   marginTop: 22,
      height: screenHeight,
      width: screenWidth,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalView: {
        // margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 35,
        paddingVertical: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '85%'
    },
  });

export default ConfirmationModal
