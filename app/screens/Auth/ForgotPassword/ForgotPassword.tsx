import React, { FC, useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Pressable, Keyboard } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../../components/Container/Container';
import Input from '../../../components/Inputs/TextInput';
import { MediumText, RegularText, SemiBoldText } from '../../../components/Typography/Typography';
import { RootState } from '../../../store/store';
import scale from '../../../utils/scale';
import {Screen} from "../../../utils/types";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { errorHandler, successHandler, validateEmail, validatePhone } from '../../../utils/utils'
import Checkbox from '../../../components/Checkbox/Checkbox';
import Button from '../../../components/Buttons/Button';

const ForgotPassword: FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const [showLogin, toggleShowLogin] = useState(true); //toggle login button at the bottom of screen
    const [field, setField] = useState("phone"); //set field type for registration
    const [secure, setSecure] = useState(true);
    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", ()=> {
            toggleShowLogin(false);
        })
        Keyboard.addListener("keyboardDidHide", ()=> {
            toggleShowLogin(true);
        })
        return () => {
            Keyboard.removeAllListeners("keyboardDidShow");
            Keyboard.removeAllListeners("keyboardDidlHide");
        }
    }, [])

    const nav = (route: string)=> {
        navigation.navigate(route);
    }

    return (
        <Container>
            <ScrollView contentContainerStyle={{padding: scale(20), paddingBottom: scale(40)}}>
                <View style={{alignItems: "flex-start"}}>
                    <SemiBoldText title="Create new password" color={theme.neutral[900]} lines={3} size={18} />
                    <View>
                        <RegularText title="Enter your email address and we will send you a code to create a new password." textAlign="left" 
                        size={14} color={theme.neutral[800]} lines={3} />
                    </View>
                </View>
                <View style={{marginTop: scale(20)}}>
                    <Input label="Email" keyboardType="email-address" />
                </View>
                <View style={{marginTop: scale(10)}}>
                    <Button title="Proceed" color={theme.primary.main} onPress={()=> nav("EnterPasswordOtp")} />
                </View>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: scale(35),
        width: scale(30),
        resizeMode: "contain"
    }
})

export default ForgotPassword
