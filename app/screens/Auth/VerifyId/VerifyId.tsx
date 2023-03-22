import React, { FC, useRef, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../../components/Container/Container';
import { MediumText } from '../../../components/Typography/Typography';
import { RootState } from '../../../store/store';
import scale from '../../../utils/scale';
import { Screen } from '../../../utils/types';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const VerifyId: FC<Screen> = () => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const [step, setStep] = useState(1);
    const content = [
        {
            title: "What’s your BVN?",
        },
        {
            title: "What’s your Date of Birth?",
        },
        {
            title: "Enter 4 digit code",
        },
    ]

    return (
        <Container style={{paddingHorizontal: scale(20)}}>
            <View>
                <MediumText title={`Step ${step} of 3`} size={12} color={theme.neutral[900]} />
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    {content.map((val: any, index: number)=> (
                        // <Pressable onPress={()=> setStep(index + 1)} key={index} style={{width: "30%", height: scale(3), borderRadius: scale(5), 
                        <View key={index} style={{width: "30%", height: scale(3), borderRadius: scale(5), 
                            backgroundColor: step >= index + 1 ? theme.primary.main : theme.neutral[300]}} />
                    ))}
                </View>
            </View>
            {
                step === 1 ? (
                    <Step1 setStep={setStep} />
                )
                : step === 2 ? (
                    <Step2 setStep={setStep} />
                )
                : step === 3 ? (
                    <Step3 setStep={setStep} />
                )
                : (null)
            }
        </Container>
    )
}

export default VerifyId
