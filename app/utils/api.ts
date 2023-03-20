// export const pspk = 'pk_live_9c66d0e146fce1880c394e6b57ed4e12da5ced41';
import { AxiosRequestConfig } from 'axios';

const timeoutDuration: number = 120000;
const timeoutMessage: string = 'Connection timed out';

/** access token */
let accessToken = '';
// let headers = {
//   'Authorization': `Bearer ${accessToken}`,
// };

/** defines config for requests that does not require authentication */
export let requestConfig = {
  timeout: timeoutDuration, 
  timeoutErrorMessage: timeoutMessage,
}

/** defines authentication config for requests that require authentication */
export let authRequestConfig = {
  timeout: timeoutDuration,
  timeoutErrorMessage: timeoutMessage,
  headers: {
    // 'Authorization': `Bearer`,
  }
};

export const setToken = (token: string)=> {
  accessToken = token;
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
  };
  console.log(token);
  authRequestConfig.headers = headers
}

// export const api = {
//   login: '/auth/signin',
//   register: '/auth/signup',
//   verify: 'api/auth/verify',
// };
