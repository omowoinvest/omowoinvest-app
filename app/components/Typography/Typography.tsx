import React, {FC} from 'react';
import { StyleSheet, Text } from 'react-native';
import scale from '../../utils/scale';
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store';

interface textProps {
    /** title */
    title: string,
    /**Number of lines the text can break into */
    lines?: number,
    /** color of the text */
    color?: string,
    /**texts are centered by default e.g auto, left, right, center, justify*/
    textAlign?: "auto" | "left" | "right" | "center" | "justify",
    /** font size */
    size?: 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 48,
}

// type definition for block text
interface blockTextProps {
    /**Number of lines the text can break into */
    lines?: number,
    /** color of the text */
    color?: string,
    /**texts are centered by default e.g auto, left, right, center, justify*/
    textAlign?: "auto" | "left" | "right" | "center" | "justify",
    /** font size */
    size?: 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 48,
    children?: any,
    fontFamily?: string,
}
// const {theme} = CONSTANTS;
export const BoldText: FC<textProps> = props => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const title = props.title;
    return (
        <Text style={[styles.boldStyle, {color: props.color ? props.color : theme.primary.main, textAlign: props.textAlign, fontSize: props.size ? scale(props.size) : scale(16)}]} numberOfLines= {props.lines ? props.lines : 1}>{title}</Text>
    );
};
export const SemiBoldText: FC<textProps> = props => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const title = props.title;
    return (
        <Text style={[styles.semiBoldStyle, {color: props.color ? props.color : theme.primary.main, textAlign: props.textAlign, fontSize: props.size ? scale(props.size) : scale(16)}]} numberOfLines= {props.lines ? props.lines : 1}>{title}</Text>
    );
};
export const MediumText: FC<textProps> = props => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const title = props.title;
    return (
        <Text style={[styles.mediumStyle, {color: props.color ? props.color : theme.primary.main, textAlign: props.textAlign, fontSize: props.size ? scale(props.size) : scale(16)}]} numberOfLines= {props.lines ? props.lines : 1}>{title}</Text>
    );
};
export const RegularText: FC<textProps> = props => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const title = props.title;
    return (
        <Text style={[styles.regularStyle, {color: props.color ? props.color : theme.primary.main, textAlign: props.textAlign, fontSize: props.size ? scale(props.size) : scale(16)}]} numberOfLines= {props.lines ? props.lines : 1}>{title}</Text>
    );
};

/** Nestable text component. Used in cases where we need to use string/text component as children  */
export const BlockText: FC<blockTextProps> = props => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    // const title = props.title;
    return (
        <Text style={[{color: props.color ? props.color : theme.primary.main, textAlign: props.textAlign, fontSize: props.size ? scale(props.size) : scale(16), fontFamily: props.fontFamily ?? "Inter-Regular"}]} numberOfLines= {props.lines ? props.lines : 1}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    boldStyle: {
        // fontSize: scale(20),
        fontFamily: 'Inter-Bold',
        fontStyle: 'normal',
    },
    semiBoldStyle: {
        // fontSize: scale(20),
        fontFamily: 'Inter-SemiBold',
        fontStyle: 'normal',
    },
    mediumStyle: {
        // fontSize: scale(20),
        fontFamily: 'Inter-Medium',
        fontStyle: 'normal',
    },
    regularStyle: {
        // fontSize: scale(20),
        fontFamily: 'Inter-Regular',
        fontStyle: 'normal',
    },
});
