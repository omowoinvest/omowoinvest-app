import {baseURL} from '../constants';
import axios from 'axios';

// login
export const login = async (body: Object, options?: any)=> {
    const res = await axios.post(`${baseURL}/auth/login`, body, options);
    return res;
}

// login with otp
export const otpLogin = async (body: Object, options?: any)=> {
    const res = await axios.post(`${baseURL}/auth/login_with_otp`, body, options);
    return res;
}

// login with pin
export const pinLogin = async (body: Object, options?: any)=> {
    const res = await axios.post(`${baseURL}/auth/login_with_pin`, body, options);
    return res;
}

/** pre register */
export const preRegister = async (body: Object, options?: any)=> {
    const res = await axios.post(`${baseURL}/auth/pre_register`, body, options);
    return res;
}

/** resend verification otp */
export const resendVerificationOtp = async (body: Object, options?: any)=> {
    const res = await axios.post(`${baseURL}/auth/verify_pre_register_otp`, body, options);
    return res;
}

/** verify user account on pre-register */
export const verify = async (body: Object, options?: any)=> {
    const res = await axios.post(`${baseURL}/auth/verify_pre_register_otp`, body, options);
    return res;
}

/** create user pin after verification */
export const createUserPin = async (body: Object, options?: any)=> {
    const res = await axios.post(`${baseURL}/auth/create_pin`, body, options);
    return res;
}

/** forgot password */
export const forgotPassword = async (body: Object, options?: any)=> {
    const res = await axios.post(`${baseURL}/auth/forgot/password`, body, options);
    return res;
}

/** forgot password */
export const forgotPasswordOtp = async (body: Object, options?: any)=> {
    const res = await axios.post(`${baseURL}/auth/forgot/password/otp`, body, options);
    return res;
}

/** reset forgotten password */
export const resetPassword = async (body: Object, options?: any)=> {
    const res = await axios.put(`${baseURL}/auth/password/reset`, body, options);
    return res;
}

/** update/change password from inside the app */
export const updatePassword = async (body: Object, options?: any)=> {
    const res = await axios.post(`${baseURL}/auth/password/update`, body, options);
    return res;
}
