import React, { useRef, useState } from 'react';
import { View, ScrollView, Vibration, Pressable, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../../components/Inputs/TextInput';
import { SemiBoldText, RegularText, BlockText } from '../../../components/Typography/Typography';
import { RootState } from '../../../store/store';
import scale from '../../../utils/scale';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Button from '../../../components/Buttons/Button'
import OtpInput from '../../../components/Inputs/OtpInput';
import CustomKeyboard from '../../../components/CustomKeyboard/CustomKeyboard';
import { toggleLoading, toggleAlert } from '../../../store/appSettings';
import { AlertConfig } from '../../../utils/types';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import Ionicons from '@expo/vector-icons/Ionicons';

const Step3 = ({setStep}: any) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const [otp, setOtp] = useState('');
    const actionSheetRef = useRef<ActionSheetRef>(null);

    const showConfirmation = ()=> {
        actionSheetRef.current?.show();
    }

    const hideConfirmation = ()=> {
        actionSheetRef.current?.hide();
    }
    // const dispatch = useDispatch();

    const handleOtp = (value: string)=> {
        console.log(otp);
        let newValue = otp;
        if (newValue.length < 4) {
            newValue += value;
            console.log(newValue);
            setOtp(newValue);
            if(newValue.length === 4 ) {
                showConfirmation();
            }
        }
    }

    const clearOtp = ()=> {
        Vibration.vibrate(50);
        let newValue = otp;
        newValue = newValue.slice(0, -1);
        setOtp(newValue);
        console.log(newValue);
        console.log(otp);
    }

    return (
        <View style={{marginTop: scale(20), flex: 1}}>
            <SemiBoldText title="Enter 4-digit code" color={theme.neutral[900]} size={24} lines={3} />
            <View>
                <RegularText title="Please enter the 4-digit code sent to the phone number you opened your bank account with." size={14} color={theme.neutral[900]} lines={5} />
            </View>
            <View style={{marginTop: scale(40)}}>
                <View style={{alignItems: "center"}}>
                    <OtpInput isValid={otp.length === 4 ? true : false} keyboardType='number-pad' value={otp} disabled length = {4} />
                </View>
                <View style={{alignItems: "center", marginTop: scale(-10)}}>
                    <BlockText size={14} color={theme.neutral[700]}>
                        Didn’t receive any code? <SemiBoldText title="Resend" size={14} color={theme.neutral[900]} />
                    </BlockText>
                </View>
            </View>
            <View style={{marginTop: "auto"}}>
                <CustomKeyboard buttonTitle="Continue" onKeyPress={(value)=> { Vibration.vibrate(50); handleOtp(value)}} onBackSpace={clearOtp}
                    onComplete={()=> console.log("Completed")}
                />
            </View>
            <ActionSheet ref={actionSheetRef} openAnimationConfig={{bounciness: 0}} containerStyle={{padding: scale(20), borderTopRightRadius: scale(20), borderTopLeftRadius: scale(20)}}>
                <Pressable onPress={hideConfirmation} style={{alignItems: "flex-end"}}>
                    <Ionicons name="close-outline" size={25} color={theme.neutral[700]} />
                </Pressable>
                <View style={{alignItems: "center", marginTop: scale(20)}}>
                    <Image source={require("../../../../assets/img/circle-check.png")} style={{height: scale(110), width: scale(110), resizeMode: "contain"}} />
                </View>
                <View style={{marginTop: scale(30)}}>
                    <SemiBoldText title="ID verification successful" size={16} textAlign="center" lines={3} color={theme.neutral[900]} />
                    <View style={{marginTop: scale(10)}}>
                        <RegularText size={14}
                        title="Yay! Your identity has been verified.. Click “Continue” to start creating your kids profiles." textAlign="center" lines={10} color={theme.neutral[900]} />
                    </View>
                </View>
                <View style={{marginTop: scale(20)}}>
                    <Button title="Continue" textColor={theme.light} 
                        onPress={()=> {
                            hideConfirmation();
                        }}  
                    />
                </View>
            </ActionSheet>
        </View>
    )
}

export default Step3
