import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
// import { colors } from '../../Styles/Styles'
import scale from '../../utils/scale';
import { RegularText, MediumText } from '../Typography/Typography';
import CONSTANTS from '../../utils/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface ListProps {
    /** title string */
    title: string,
    subtitle?: string,
    /** style object */
    // style?: Object,
    /** function executed on press */
    onPress?: ()=> void,
    icon?: React.ReactNode,
    /**icon position whether left or right */
    iconPosition?: string,
    /**optional style for icon parent component like margin and backgroundColor */
    iconStyle?: Object,
    disabled?: boolean,
    /**style of button text */
    textStyle?: Object,
    rippleColor?: string,
    /** color of button text to override default color */
    textColor?: string,
    /**vertical padding value to control button height */
    verticalPadding?: number,
    /**control horizontal padding value */
    horizontalPadding?: number,
    loading?: boolean,
    loaderColor?: string,
    /** color of border */
    borderColor?: string,
}
// const {theme} = CONSTANTS;
const ListItem: React.FC<ListProps> = (props) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    return (
        <Pressable style={[styles.listItem, {borderBottomColor: props.borderColor ?? theme.light[400]}]} onPress={props.onPress} android_ripple={{color: props.rippleColor ?? theme.light[400]}}>
            <View style={styles.content}>
                <View style={{flex: 10}}>
                    <MediumText size={20} title={props.title} color={props.textColor ?? theme.dark} />
                    {props.subtitle ? (
                        <RegularText size={12} title={props.subtitle} />
                    ) : (null)}
                </View>
                {props.icon ? (
                    <View style={{flex: 2, alignItems: 'flex-end'}}>
                        {props.icon}
                    </View>
                ) : (null)}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    listItem: {
        // borderBottomColor: CONSTANTS.theme.light.dark,
        borderBottomWidth: 1,
        borderStyle: "solid",
        paddingVertical: scale(10)
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: scale(10),
        alignItems: 'center'
    }
})

export default ListItem
