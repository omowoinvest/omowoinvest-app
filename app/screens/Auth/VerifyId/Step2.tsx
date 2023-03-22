import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Input from '../../../components/Inputs/TextInput';
import { SemiBoldText, RegularText } from '../../../components/Typography/Typography';
import { RootState } from '../../../store/store';
import scale from '../../../utils/scale';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Button from '../../../components/Buttons/Button';
import DatePicker from '../../../components/DatePicker/DatePicker';
import { AnimateStyle } from 'react-native-reanimated';

const Step2 = ({setStep}: any) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const [date, setDate] : any = useState(null);

    const handleConfirm = (date: Date)=> {
        console.log(date);
        setDate(date.toLocaleDateString());
    }

    return (
        <View style={{marginTop: scale(20)}}>
            <ScrollView>
                <SemiBoldText title="What’s your Date of Birth?" color={theme.neutral[900]} size={24} lines={3} />
                <View style={{marginTop: scale(20)}}>
                    <DatePicker onConfirm={handleConfirm} value={date} />
                </View>
                <View style={{marginTop: scale(20)}}>
                    <Button title="Continue"
                        onPress={()=> setStep(3)} 
                        disabled={!date}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default Step2
