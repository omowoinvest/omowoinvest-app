import { NavigationProp, Route } from "@react-navigation/native";
import { ReactNode } from "react";
import { Screen, ScreenProps } from "react-native-screens";

/** user structure */
export interface UserObj {
    user: any;
}
/** colors properties contained in theme */
interface Colors {
    primary: {
        main: string;
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    success: {
        main: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    warning: {
        main: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    danger: {
        main: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    neutral: {
        main: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };
    light: string;
    bg: string;
}

/** general theme of the application */
export interface Theme {
    light: Colors,
    dark: Colors,
}

/** generic interface for routed screens */
export interface Screen {
    navigation: NavigationProp<any, any>;
    route?: Route<any, any>;
    store?: any;
}

export interface EventCardType {
    /** background color of the card container */
    background: string;
    /** source of event image */
    imageSource: string;
    /** raw image string source */
    rawSource: string;
    /** function to call when the card is clicked */
    onPress?: ()=> void;
    /** function to call when share button is pressed */
    onPressShare?: ()=> void;
    /** function to call when favourite button is pressed */
    onPressFavourite?: ()=> void;
    /** date string displayed above title */
    date?: string;
    /** event title string  */
    title: string;
    /** event description displayed below title */
    description?: string;
    /** text color */
    textColor?: string;
}

export interface AlertConfig {
    title?: string;
    message: string;
    mode?: "success" | "error" | "neutral"
}

/** declares type for application wide settings/configuratioon */
export interface AppSettings {
    isLoggedIn: boolean;
    isAppReady: boolean;
    themeMode: 'light' | 'dark';
    theme: Colors;
    isLoading: boolean;
    /** contains message and title for alert */
    alert: AlertConfig
    /** determines whether alert is visible */
    alertVisible: boolean;
    loaderTitle?: string;
}

/** declares type for side menu item */
export interface MenuListItem {
    /** icon image source */
    icon: ReactNode;
    /** menu item title string  */
    title: string;
    /** function to execute on press of menu item */
    onPress?: ()=> void;
}

/** declares type for quantity control input */
export interface QuantityInputProps {
    /** display value */
    value: number;
    /** function to execute on press of increase(+) button */
    onIncrease?: (currentValue: number)=> void;
    /** function to execute on press of decrease(-) button */
    onDecrease?: (currentValue: number)=> void;
    /** background color */
    backgroundColor?: string;
    /** text color */
    color?: string;
}

