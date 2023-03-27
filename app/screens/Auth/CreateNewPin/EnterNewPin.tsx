import React, { FC, useState } from 'react';
import { View, Vibration, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Container from '../../../components/Container/Container';
import CustomKeyboard from '../../../components/CustomKeyboard/CustomKeyboard';
import OtpInput from '../../../components/Inputs/OtpInput';
import { RegularText, SemiBoldText } from '../../../components/Typography/Typography';
import { toggleLoading, toggleAlert } from '../../../store/appSettings';
import { RootState } from '../../../store/store';
import scale from '../../../utils/scale';
import { AlertConfig, Screen } from '../../../utils/types';

const EnterNewPin: FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const [pin, setPin] = useState('');
    const handleOtp = (value: string)=> {
        console.log(pin);
        let newValue = pin;
        if (newValue.length < 4) {
            newValue += value;
            console.log(newValue);
            setPin(newValue);
            if(newValue.length === 4 ) {
                navigation.navigate("ConfirmNewPin")
            }
        }
    }

    const clearOtp = ()=> {
        Vibration.vibrate(50);
        let newValue = pin;
        newValue = newValue.slice(0, -1);
        setPin(newValue);
        console.log(newValue);
        console.log(pin);
    }

    return (
        <Container style={{padding: scale(20)}}>
            <View style={{height: "50%"}}>
                <View style={{alignItems: "center", marginTop: scale(10)}}>
                    <SemiBoldText title="Create new PIN" color={theme.neutral[900]} 
                    textAlign="center" lines={3} size={18} />
                    <View style={{marginBottom: scale(10)}}>
                        <RegularText title="Input new PIN here so as to easily access your account with us." textAlign="center" size={14} color={theme.neutral[800]} lines={3} />
                    </View>
                </View>
                <View style={{alignItems: "center", marginTop: scale(30)}}>
                    <OtpInput isValid={pin.length === 4 ? true : false} keyboardType='number-pad' value={pin} disabled length = {4} />
                </View>         
            </View>
            <CustomKeyboard biometricEnabled={false} onKeyPress={(value)=> { Vibration.vibrate(50); handleOtp(value)}} onBackSpace={clearOtp}
                onComplete={()=> console.log("Completed")}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    avatarContainer: {
        height: scale(100),
        width: scale(100),
        borderRadius: scale(50),
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
    },
    avatar: {
        height: scale(90),
        width: scale(90),
        borderRadius: scale(45)
    }
})

export default EnterNewPin
