import React, { FC, useState } from 'react';
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import scale from '../../utils/scale';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { RegularText } from '../Typography/Typography';

interface Props {
    onConfirm?: (date: Date)=> void;
    /** value to display on picker */
    value?: any;
}

const DatePicker: FC<Props> = ({onConfirm, value}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date: Date) => {
      hideDatePicker();
      onConfirm ? onConfirm(date) : null;
    };
    return (
        <>
            <Pressable style={[styles.defaultItemStyle, {borderColor: theme.neutral[500]}]} onPress={showDatePicker}>
                <MaterialCommunityIcons name="calendar-blank-outline" size={30} color={theme.neutral[600]} style={{marginRight: scale(5)}} />
                <RegularText title={value ?? "dd/mm/yyyy"} size={16} color={value ? theme.neutral[900] : theme.neutral[700]} />
            </Pressable>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </>
    )
}

const styles = StyleSheet.create({
    defaultItemStyle: {
        paddingHorizontal: 15,
        borderRadius: 10,
        paddingVertical: scale(5),
        borderWidth: 1.5,
        marginBottom: 20,
        height: scale(50),
        flexDirection: 'row',
        alignItems: "center"
    },

})

export default DatePicker
