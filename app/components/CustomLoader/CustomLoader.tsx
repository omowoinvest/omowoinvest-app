import React from 'react';
import { StyleSheet, Modal, View, Dimensions, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { BoldText } from '../Typography/Typography';

const ScreenHeight = Dimensions.get("screen").height;
const StatusBarHeight = StatusBar.currentHeight || 50;
interface Props {
    store?: any,
}

export const CustomLoader: React.FC<Props> = ()=> {
    const {theme, isLoading} = useSelector((state: RootState) => state.appSetting);
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
                <Animatable.Image duration={700} direction="alternate" iterationCount="infinite" animation='zoomIn' source={require('../../../assets/img/logo.png')} style={styles.imgStyle} useNativeDriver easing="linear" />
                <BoldText title="Please wait..." color={theme.light.main} />
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
