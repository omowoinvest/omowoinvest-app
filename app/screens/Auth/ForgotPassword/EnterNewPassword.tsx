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

const EnterNewPassword: FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const [secure, setSecure] = useState(true);

    const nav = (route: string)=> {
        navigation.navigate(route);
    }

    return (
        <Container>
            <ScrollView contentContainerStyle={{padding: scale(20), paddingBottom: scale(40)}}>
                <View style={{alignItems: "flex-start"}}>
                    <SemiBoldText title="Create new password" color={theme.neutral[900]} lines={3} size={18} />
                    <View>
                        <RegularText title="Enter your new password to access your new account with us." textAlign="left" 
                        size={14} color={theme.neutral[800]} lines={3} />
                    </View>
                </View>
                <View style={{marginTop: scale(20)}}>
                    <Input label="Password" secure={secure}
                        icon={
                            <Pressable onPress={()=> setSecure(!secure)}>
                                <MaterialCommunityIcons color={theme.neutral[500]} name={secure ? "eye-outline" : "eye-off-outline"} size={scale(25)} />
                            </Pressable>
                        }  />
                </View>
                <View style={{marginTop: scale(10)}}>
                    <Button title="Create new password" color={theme.primary.main} onPress={()=> nav("PasswordSuccess")} />
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

export default EnterNewPassword
