import React from 'react';
import { View, Modal, StyleSheet, Dimensions, Pressable, StatusBar } from 'react-native';
import { Button } from '../Buttons/Button';
// import { IconButton } from '../Buttons/IconButton';
// import globalStyles, {colors} from '../../Styles/Styles';
// import {observer, inject} from 'mobx-react';
import {RegularText, BoldText, MediumText} from '../Typography/Typography';
import CONSTANTS from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {toggleAlert}  from '../../store/appSettings';
import scale from '../../utils/scale';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const AlertModal = () => {
  const {theme, alertVisible, alert} = useSelector((state: RootState) => state.appSetting);
  const dispatch = useDispatch();
  return (
      // <View style={styles.centeredView}>
          <Modal
              animationType="fade"
              transparent={true}
              visible={alertVisible}
              onRequestClose={() => {
                  // this.props.store.setModalVisible(false);
                  // props.store.resetModal()
              }}
              hardwareAccelerated = {true}
          >
            {/* <StatusBar backgroundColor='rgba(0, 0, 0, 0.3)' barStyle="dark-content" /> */}
              {/* <Pressable style={styles.centeredView} onPress = {this.props.store.resetModal}> */}
              <Pressable style={styles.centeredView} onPress={()=> dispatch(toggleAlert({title: '', message: ''}))}>
                  <View style={[styles.modalView, {backgroundColor: theme.neutral[900]}]}>
                    {alert.mode === "success" ? (
                      <MaterialCommunityIcons name="check-circle-outline" size={scale(25)} style={{marginRight: scale(10)}} 
                      color={theme.primary[300]} />
                    ) : alert.mode === "error" ? (
                        <MaterialCommunityIcons name="alert" size={scale(25)} style={{marginRight: scale(10)}} 
                        color={theme.danger.main} />
                      )
                      : (
                        <MaterialCommunityIcons name="alert-circle-outline" size={scale(25)} style={{marginRight: scale(10)}} 
                        color={theme.primary[300]} />
                      )
                    }
                      <MediumText title={alert.message || ''} color={theme.light} size={14} lines={3} />
                      {/* <BoldText size={20} title={alert.title || "Error"} textAlign="left" color={theme.dark} />
                      <RegularText size={14} title={alert.message || ''} lines={10} color={theme.dark} textAlign="center" />
                      <View style={{marginTop: 40, width: '100%'}}>
                          <Button title="Ok" color={theme.primary.main} onPress = {
                            ()=> dispatch(toggleAlert({title: '', message: ''}))
                            } 
                            textColor={theme.light.main} />
                      </View> */}
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
        flexDirection: "row",
        borderRadius: scale(8),
        paddingHorizontal: scale(10),
        paddingVertical: scale(20),
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
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default AlertModal;
