import {Dimensions, Platform} from 'react-native';
import { Theme } from './types';

const {height, width} = Dimensions.get('window');

export const baseURL = 'https://banka.testenv.com.ng/api';

var month = new Array();
month[0] = 'January';
month[1] = 'February';
month[2] = 'March';
month[3] = 'April';
month[4] = 'May';
month[5] = 'June';
month[6] = 'July';
month[7] = 'August';
month[8] = 'September';
month[9] = 'October';
month[10] = 'November';
month[11] = 'December';


const theme: Theme = {
  /**LIGHT MODE COLOR PALETTE */
  light: {
    primary: {
      main: "#0694C0",
      100: "#D6F4FD",
      200: "#8CE0F8",
      300: "#40C9F4",
      400: "#0EAEE0",
      500: "#0694C0",
      600: "#067DA2",
      700: "#047497",
      800: "#045A76",
      900: "#053847",
    },
    success: {
      main: "#008E86",
      100: "#DBFCFB",
      200: "#B8F9F7",
      300: "#55E8E3",
      400: "#23BFBA",
      500: "#008E86",
      600: "#08827E",
      700: "#097B77",
      800: "#095956",
      900: "#063533",
    },
    warning: {
      main: "#FAC347",
      100: "#FFFCF6",
      200: "#FBE9C1",
      300: "#F1D28D",
      400: "#EFC363",
      500: "#FAC347",
      600: "#FAC347",
      700: "#E9A818",
      800: "#A57712",
      900: "#664909",
    },
    danger: {
      main: "#EC6952",
      100: "#FDE7E4",
      200: "#FBC1B9",
      300: "#F6978A",
      400: "#EA7768",
      500: "#EC6952",
      600: "#D75841",
      700: "#B9432F",
      800: "#A22D19",
      900: "#831B09",
    },
    neutral: {
      main: "#A6AFBB",
      100: "#A6AFBB",
      200: "#ECECEE",
      300: "#DCDCE2",
      400: "#BFC7D0",
      500: "#A6AFBB",
      600: "#8F9DAD",
      700: "#777E8C",
      800: "#596173",
      900: "#3B4252",
    },
    light: "#FFFFFF",
    bg: "#FBFEFF",
  },
  /**DARK MODE COLOR PALETTE */
  dark: {
    primary: {
      main: "#3F63F6",
      100: "#D8E3FE",
      200: "#B2C6FE",
      300: "#8BA6FC",
      400: "#6E8CF9",
      500: "#3F63F6",
      600: "#2E4BD3",
      700: "#1F36B1",
      800: "#14248E",
      900: "#0C1876",
    },
    success: {
      main: "#99E86C",
      100: "#F3FDE2",
      200: "#E4FCC6",
      300: "#CFF8A8",
      400: "#B9F190",
      500: "#99E86C",
      600: "#73C74E",
      700: "#51A736",
      800: "#348622",
      900: "#1F6F14",
    },
    warning: {
      main: "#F9E636",
      100: "100",
      200: "200",
      300: "#FDF486",
      400: "#FBEE67",
      500: "#F9E636",
      600: "#D6C327",
      700: "#B3A11B",
      800: "#908011",
      900: "#77680A",
    },
    danger: {
      main: "#D83D17",
      100: "#FEEAD2",
      200: "#FED0A5",
      300: "#FEAF79",
      400: "#FD8F57",
      500: "#FC5B20",
      600: "#D83D17",
      700: "#B52510",
      800: "#92120A",
      900: "#780607",
    },
    neutral: {
      main: "#A6AFBB",
      100: "#A6AFBB",
      200: "#ECECEE",
      300: "#DCDCE2",
      400: "#BFC7D0",
      500: "#A6AFBB",
      600: "#8F9DAD",
      700: "#777E8C",
      800: "#596173",
      900: "#3B4252",
    },
    light: "#FFFFFF",
    bg: "#FBFEFF",
  }
}

const CONSTANTS =  {
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,
  IS_IOS: Platform.OS === 'ios',
  IS_ANDROID: Platform.OS === 'android',
  GOOGLE_MAPS_APIKEY: '',
  month,
  theme,
  baseURL
  // REDIRECT_URL: 'https://exalt-courier.netlify.app',
};

export default CONSTANTS
