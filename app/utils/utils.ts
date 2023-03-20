// import {accountAction, deliveryAction} from '../store/actions';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import { AxiosRequestConfig } from 'axios';
// import {instance} from './api';
// import SendIntentAndroid from 'react-native-send-intent';
// import { OpenMapDirections } from 'react-native-navigation-directions';
import constants from './constants';
// import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const validateEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};

export const validatePhone = (number: string) => {
  return number.startsWith('234') && number.length === 13
};

export const errorHandler = (error: any)=> {
  const obj = {
    title: "Error",
    message: error?.error ? error?.error[0] : error?.message || error?.msg || 'An error occured'
  }
  return obj
}

// handles success response and displays any necessary message to user
export const successHandler = (res: any)=> {
  const obj = {
    title: "Done",
    message: res?.message || "Action successful"
  }
  return obj
}

/** this function simply extracts data from an api response */
export const extractData = (res: any)=> {
  return res.data.data
}

// formart currency
export const formatMoney = (
  amount: any,
  decimalCount = 2,
  decimal = '.',
  thousands = ',',
) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i: any = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)),
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    //console.log(e);
  }
};

export const getMapOfWeeks = () => {
  const daysOfWeek = new Map();
  daysOfWeek.set('1', 'Sun');
  daysOfWeek.set('2', 'Mon');
  daysOfWeek.set('3', 'Tue');
  daysOfWeek.set('4', 'Wed');
  daysOfWeek.set('5', 'Thu');
  daysOfWeek.set('6', 'Fri');
  daysOfWeek.set('7', 'Sat');

  return daysOfWeek;
};

// global navigation fuction to navigate outside screen or app
export const navigate = (navProps: NavigationProp<any, any>, route: string, params?: any)=> {
  navProps.navigate(route, params);
}

//wrapper for axios
// export const makeNetworkCalls = async (requestConfig: AxiosRequestConfig) => {
//   return await instance(requestConfig);
// };


// export const openGoogleMapsIntent = (latitude: string, longitude: string, type: any) => {
//   if (constants.IS_IOS) {
//     const state = store.getState();
//     const {coordinates} = state.account;
//     OpenMapDirections(coordinates, {latitude, longitude}, 'd');
//     return;
//   }
//   SendIntentAndroid.openMapsWithRoute(
//     `${latitude}, ${longitude}`,
//     type ? type : 'd',
//   );
// };
