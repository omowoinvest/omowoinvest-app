import React from 'react';
import { StyleSheet, Modal, View, Dimensions, StatusBar, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import scale from '../../utils/scale';
import { BoldText, MediumText } from '../Typography/Typography';

const ScreenHeight = Dimensions.get("screen").height;
const StatusBarHeight = StatusBar.currentHeight || 50;
interface Props {
    store?: any,
}

export const CustomLoader: React.FC<Props> = ()=> {
    const {theme, isLoading, loaderTitle} = useSelector((state: RootState) => state.appSetting);
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isLoading}
            // visible={true}
            onRequestClose={() => {
                // this.props.store.setModalVisible(false);
                // props.store.resetModal()
            }}
            hardwareAccelerated = {true}
        >
            {/* <StatusBar backgroundColor='rgba(0, 0, 0, 0.3)' barStyle="dark-content" /> */}
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)', alignItems: 'center'}}>
                <View style={{flexDirection: "row", backgroundColor: theme.neutral[900], borderRadius: scale(8), padding: scale(10)}}>
                    <ActivityIndicator color={theme.primary.main} size={scale(18)} style={{marginRight: scale(10)}} />
                    <MediumText title={loaderTitle ?? "Please wait..."} color={theme.light} size={14} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    // spinnerTextStyle: {
    //     color: '#FFF',
    //     fontWeight: 'normal',
    //     fontSize: 17,
    //     fontFamily: 'CircularStd-Black',
    // },
    imgStyle: {
        height: 80,
        width: '60%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
});

export default CustomLoader;
