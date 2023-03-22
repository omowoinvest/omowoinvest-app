import React, { FC, useEffect, useRef, useState } from 'react';
import { View, Text, Vibration } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../../components/Container/Container';
import CustomKeyboard from '../../../components/CustomKeyboard/CustomKeyboard';
import OtpInput from '../../../components/Inputs/OtpInput';
import { BlockText, BoldText, RegularText, SemiBoldText } from '../../../components/Typography/Typography';
import { RootState } from '../../../store/store';
import CONSTANTS from '../../../utils/constants';
import scale from '../../../utils/scale';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {toggleAlert, toggleLoading}  from '../../../store/appSettings';
import { AlertConfig, Screen } from '../../../utils/types';

const Verify: FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const {DEVICE_HEIGHT} = CONSTANTS;
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(90);
    const [enabled, setEnabled] = useState(false);
    const dispatch = useDispatch();
    // let timeOutVal = useRef(0);
    let interval: any;

    useEffect(() => {
        startInterval();
        return ()=> {
            clearInterval(interval);
        }
    }, [timer])

    const startInterval = ()=> {
        // setTimer(30);
        interval = setInterval(() => {
            if(timer > 0) {
                let newTimer = timer;
                newTimer = newTimer - 1;
                setTimer(newTimer);
                // setTimer(newTimer);
            }
            if(timer === 0) {
                setEnabled(true);
                clearTimeout(interval);
                // setTimer(newTimer);
            }
        }, 1000);
    }

    const handleOtp = (value: string)=> {
        console.log(otp);
        let newValue = otp;
        if (newValue.length < 4) {
            newValue += value;
            console.log(newValue);
            setOtp(newValue);
            if(newValue.length === 4 ) {
                dispatch(toggleLoading("Verifying phone number"));
                setTimeout(() => {
                    dispatch(toggleLoading(""));
                    const alert: AlertConfig = {
                        message: "Account successfully verified",
                        mode: "success"
                    }
                    dispatch(toggleAlert(alert))
                    setTimeout(() => {
                        navigation.navigate("CreatePin");
                        dispatch(toggleAlert({message: ""}))
                    }, 1500);
                }, 1500);
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
        <Container style={{padding: scale(20)}}>
            <View style={{height: DEVICE_HEIGHT / 2}}>
                <View style={{alignItems: "center", marginTop: scale(10)}}>
                    <SemiBoldText title="Verifying your number" color={theme.neutral[900]} size={20} />
                </View>
                <View style={{marginTop: scale(10)}}>
                    <BlockText color={theme.neutral[700]} lines={5} textAlign="center" size={14}>
                        Waiting to automatically detect an SMS sent to
                        <SemiBoldText title=" +234 803 342 3000. " size={14} color={theme.neutral[700]} textAlign="center" />
                        <View style={{flexDirection: "row", borderBottomWidth: 1, borderBottomColor: theme.neutral[800]}}>
                            <RegularText title="Wrong number?" size={14} color={theme.neutral[800]} />
                        </View>
                    </BlockText>
                </View>
                <View style={{alignItems: "center", marginTop: scale(30)}}>
                    <OtpInput isValid={otp.length === 4 ? true : false} keyboardType='number-pad' value={otp} disabled length = {4} />
                </View>
                <View style={{alignItems: "center"}}>
                    <RegularText title="Enter 4-digit code" color={theme.neutral[700]} size={14} />
                </View>
                <View style={{marginTop: scale(30)}}>
                    <View style={{flexDirection: "row", borderBottomWidth: 1, borderColor: theme.neutral[500], paddingHorizontal: scale(5), paddingBottom: scale(5)}}>
                        <MaterialCommunityIcons name="email-outline" size={25} color={theme.neutral[600]} style={{marginRight: scale(5)}} />
                        <RegularText title="Resend SMS" size={14} color={theme.neutral[600]} />
                        <View style={{marginLeft: "auto"}}>
                            <RegularText size={14} color={theme.neutral[600]} title={ timer >= 60 ? String(Math.floor(timer / 60)) + ":" + (String(timer % 60)) : '00:' + ( timer < 10 ? '0' + String(timer) : String(timer)) } />
                        </View>
                    </View>
                    <View style={{flexDirection: "row", paddingHorizontal: scale(5), paddingTop: scale(5)}}>
                        <MaterialCommunityIcons name="phone-outline" size={25} color={theme.neutral[600]} style={{marginRight: scale(5)}} />
                        <RegularText title="Call me" size={14} color={theme.neutral[600]} />
                        <View style={{marginLeft: "auto"}}>
                            <RegularText size={14} color={theme.neutral[600]} title={ timer >= 60 ? String(Math.floor(timer / 60)) + ":" + (String(timer % 60)) : '00:' + ( timer < 10 ? '0' + String(timer) : String(timer)) } />
                        </View>
                    </View>
                </View>
            </View>
            <CustomKeyboard buttonTitle="Continue" onKeyPress={(value)=> { Vibration.vibrate(50); handleOtp(value)}} onBackSpace={clearOtp}
                onComplete={()=> console.log("Completed")}
            />
        </Container>
    )
}

export default Verify
