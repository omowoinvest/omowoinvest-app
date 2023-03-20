import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import scale from '../../utils/scale';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface Props {
    checked: boolean;
    mode: 'light' | 'dark';
    onPress: ()=> void;
    color?: string;
}

const Checkbox: React.FC<Props> = ({checked, mode, onPress, color}) => {
    // const {theme} = CONSTANTS;
    const {theme} = useSelector((state: RootState) => state.appSetting);
    return (
        <TouchableOpacity onPress={onPress} style={[styles.checkbox, {borderColor: mode === 'light' ? color ?? theme.neutral.main : color ?? theme.neutral.main, backgroundColor: checked ? color ?? theme.primary.main : 'transparent'}]}>
            {checked ? (
                <>
                    <MaterialCommunityIcons name="check" color={theme.light} size={20} />
                    
                </>
            ) : null}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        borderWidth: 1.5,
        height: scale(20),
        width: scale(20),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(4),
    },
})

export default Checkbox;
