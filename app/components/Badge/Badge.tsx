import React, { FC } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import scale from '../../utils/scale';
import { MediumText } from '../Typography/Typography';

interface Props {
    color?: string;
    title?: string;
    textColor?: string;
}

const Badge: FC<Props> = ({color, title, textColor}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    return (
        <Pressable style={[styles.badge, {backgroundColor: color}]}>
            <MediumText title={title as string} color={textColor ?? theme.neutral[900]} size={12} transform="capitalize" />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    badge: {
        height: scale(23),
        borderRadius: scale(43),
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: scale(15),
    }
})

export default Badge
