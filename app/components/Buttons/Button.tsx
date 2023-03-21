import React from 'react';
import { View, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
// import globalStyles, {colors} from '../../Styles/Styles';
import scale from '../../utils/scale';
import {BoldText, MediumText} from '../Typography/Typography';

interface buttonProps {
    /** title string */
    title: string,
    /** style object */
    style?: Object,
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
    /** background color of button */
    color?: string,
    /**vertical padding value to control button height */
    verticalPadding?: number,
    /**control horizontal padding value */
    horizontalPadding?: number,
    loading?: boolean,
    loaderColor?: string,
    /** button type */
    outline?: boolean,
}

const defaultMargin: number = 2;
// const {theme} = CONSTANTS;
export const Button: React.FC<buttonProps> = (props: buttonProps) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);

    return (
        <Pressable android_ripple={{color: props.rippleColor ?? theme.light}} onPress={props.onPress} 
        style={[styles.btn, {opacity: props.disabled ? 0.5 : 1, backgroundColor: props.outline ? "transparent" : props.color ?? theme.primary.main, borderWidth: props.outline ? 1.5 : undefined, borderColor: props.outline ? props.color ?? theme.primary.main : undefined }]} 
        disabled={props.disabled}>
            {props.loading ? (
                <View style={{alignSelf: "center"}}>
                    <ActivityIndicator color={props.loaderColor ?? theme.light} style={{height: scale(23), width: scale(23)}} />
                </View>
            ) : (
                <>
                {props.icon && props.iconPosition === 'left' ? (
                    /**default icon style passed in when none is provided as a prop */
                    <View style={props.iconStyle ?? {margin: defaultMargin}}>
                        {props.icon}
                    </View>
                ) : (null)}
                    <BoldText title={props.title} color = {props.disabled ? theme.light[300] : props.textColor ?? theme.light} size={14} />
                {props.icon && !props.iconPosition ? (
                    /**default icon style passed in when none is provided as a prop */
                    <View style={props.iconStyle ?? {margin: defaultMargin}}>
                        {props.icon}
                    </View>
                ) : (null)}
                {props.icon && props.iconPosition === 'right' ? (
                    /**default icon style passed in when none is provided as a prop */
                    <View style={props.iconStyle ?? {margin: defaultMargin}}>
                        {props.icon}
                    </View>
                ) : (null)}
                </>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: scale(30),
        paddingVertical: scale(15),
    },
});

export default Button;
