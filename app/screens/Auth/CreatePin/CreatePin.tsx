import React, { FC, useState } from 'react'
import { View, Vibration } from 'react-native';
import { useSelector } from 'react-redux'
import Container from '../../../components/Container/Container'
import CustomKeyboard from '../../../components/CustomKeyboard/CustomKeyboard'
import OtpInput from '../../../components/Inputs/OtpInput'
import { RegularText, SemiBoldText } from '../../../components/Typography/Typography'
import { toggleLoading, toggleAlert } from '../../../store/appSettings'
import { RootState } from '../../../store/store'
import scale from '../../../utils/scale'
import { AlertConfig, Screen } from '../../../utils/types'

const CreatePin: FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const [mode, setMode] = useState("create");
    const [pin, setPin] = useState('');
    const handleOtp = (value: string)=> {
        console.log(pin);
        let newValue = pin;
        if (newValue.length < 4) {
            newValue += value;
            console.log(newValue);
            setPin(newValue);
            if(newValue.length === 4 ) {
                mode !== "confirm" ? handleMode() : navigation.navigate("PinSuccess");
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

    const handleMode = ()=> {
        setMode("confirm");
        setPin("");
    }

    return (
        <Container style={{padding: scale(16)}}>
            <View style={{height: "50%"}}>
                <View style={{alignItems: "center"}}>
                    <SemiBoldText title={mode === "create" ? "Create PIN" : "Confirm PIN"} color={theme.neutral[900]} size={20} />
                </View>
                <View>
                    <RegularText 
                        title={mode === "create" ? "Input a PIN here for extra security and easy access to your account with us." : "Please input your PIN again just to be sure you remember."}
                        size={14} 
                        color={theme.neutral[800]}
                        lines={3}
                        textAlign="center"
                    />
                </View>
                <View style={{alignItems: "center", marginTop: scale(30)}}>
                    <OtpInput isValid={pin.length === 4 ? true : false} keyboardType='number-pad' value={pin} disabled length = {4} />
                </View>         
            </View>
            <CustomKeyboard buttonTitle="Continue" onKeyPress={(value)=> { Vibration.vibrate(50); handleOtp(value)}} onBackSpace={clearOtp}
                onComplete={()=> console.log("Completed")}
            />
        </Container>
    )
}

export default CreatePin
