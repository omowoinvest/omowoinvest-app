import React, { FC } from 'react';
import { View, Text, Pressable, StyleSheet, ImageSourcePropType } from 'react-native';
import { Image } from 'react-native-animatable';
import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import { RegularText, SemiBoldText } from '../../components/Typography/Typography';
import { RootState } from '../../store/store';
import scale from '../../utils/scale';
// import Imag from '../../../assets/img/air.png';

interface Props {
    imgSrc?: ImageSourcePropType; 
    title: string;
    description?: string;
    onPress?: ()=> void;
}

const InvestmentItem: FC<Props> = ({imgSrc, title, description, onPress }: Props) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    return (
        <Pressable style={[styles.itemStyle, {borderColor: theme.neutral[300]}]}
            onPress={onPress}
        >
            <View style={{flex: 9, }}>
                <Image source={imgSrc as ImageSourcePropType} 
                style={{height: "100%", width: "100%", resizeMode: "stretch", borderTopLeftRadius: scale(8), borderTopRightRadius: scale(8)}} />
            </View>
            <View style={{flex: 3, paddingHorizontal: scale(20), paddingVertical: scale(10) }}>
                <SemiBoldText title={title} color={theme.neutral[900]} size={16} />
                <RegularText title={description as string} size={14} color={theme.neutral[800]} lines={2} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    itemStyle: {
        borderRadius: scale(8),
        height: scale(353),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        borderWidth: scale(1),
        marginBottom: scale(16),
        // elevation: 1,
    }
})

export default InvestmentItem
