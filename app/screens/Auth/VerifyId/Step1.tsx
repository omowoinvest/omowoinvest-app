import React from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Input from '../../../components/Inputs/TextInput';
import { SemiBoldText, RegularText } from '../../../components/Typography/Typography';
import { RootState } from '../../../store/store';
import scale from '../../../utils/scale';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Button from '../../../components/Buttons/Button';

const Step1 = ({setStep}: any) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    return (
        <View style={{marginTop: scale(20), flex: 1}}>
            <ScrollView>
                <SemiBoldText title="What’s your BVN?" color={theme.neutral[900]} size={24} lines={3} />
                <View style={{marginTop: scale(20)}}>
                    <Input label="Your BVN" />
                    <View style={{flexDirection: "row", marginTop: scale(-10), alignItems: "center"}}>
                        <MaterialCommunityIcons name="alert-circle-outline" size={26} color={theme.neutral[900]} />
                        <View style={{marginLeft: scale(5)}}>
                            <RegularText title="Must be 11 digits" size={14} color={theme.neutral[900]} />
                        </View>
                    </View>
                </View>
                <View style={{marginTop: scale(20)}}>
                    <Button title="Continue"
                        onPress={()=> setStep(2)} 
                        />
                </View>
            </ScrollView>
        </View>
    )
}

export default Step1
