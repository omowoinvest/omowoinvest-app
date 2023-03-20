import React from 'react'
import { View, Text, Pressable, Image } from 'react-native';
import scale from '../../utils/scale';
import { MenuListItem } from '../../utils/types';
import { MediumText } from '../Typography/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';

const MenuItem: React.FC<MenuListItem> = ({icon, title, onPress}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    return (
        <Pressable style={{padding: scale(10), marginVertical: scale(10), flexDirection: 'row', alignItems: 'center'}} onPress={onPress}>
            {icon ?? null }
            <View style={{marginLeft: scale(20)}}>
                <MediumText title={title} color={theme.primary.main} size={24} />
            </View>
        </Pressable>
    )
}

export default MenuItem
