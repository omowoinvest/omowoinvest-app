import React from 'react'
import { View, StyleSheet } from 'react-native';
import { RegularText } from '../Typography/Typography';
// import {colors} from '../../Styles/Styles';
import CONSTANTS from '../../utils/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface Props {
    /** text to describe empty state */
    title: string;
    icon?: React.ReactNode;
    textColor?: string;
}
// const {theme} = CONSTANTS;
const EmptyBox: React.FC<Props> = (props: Props) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    return (
        <View style = {[styles.container, {borderColor: theme.primary.main}]}>
            {props.icon ? (
                <View style={{alignItems: 'center'}}>
                    {props.icon}
                </View>
            ) : (null)}
            <RegularText title={props.title} color={props.textColor ?? theme.dark} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderStyle: 'dashed',
        // borderColor: theme.light.primary.main,
        borderWidth: 1.5,
        height: 120,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
    }
})

export default EmptyBox;
