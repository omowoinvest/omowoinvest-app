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

const Register: FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const [isChecked, toggleCheck] = useState(false); //handles check button
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
                <View style={{alignItems: "center"}}>
                    <Image source={require("../../../../assets/img/logo.png")} style={styles.logo} />
                </View>
                <View style={{alignItems: "center", marginTop: scale(20)}}>
                    <SemiBoldText title="Enter your details correctly to create an account." color={theme.neutral[900]} 
                    textAlign="center" lines={3} size={18} />
                </View>
                {field === "phone" ? (
                    <View style={{marginTop: scale(20)}}>
                        <Input label="Phone number" keyboardType="phone-pad" />
                        <Pressable style={{flexDirection: "row", marginTop: scale(-10)}} onPress={()=> setField("email")}>
                            <SemiBoldText title="Or use your email" color={theme.neutral[900]} size={12} />
                            <MaterialCommunityIcons name="arrow-right" size={25} />
                        </Pressable>
                    </View>
                ) : (
                    <View style={{marginTop: scale(20)}}>
                        <Input label="Email" keyboardType="email-address" />
                        <Pressable style={{flexDirection: "row", marginTop: scale(-10)}} onPress={()=> setField("phone")}>
                            <SemiBoldText title="Or use your phone number" color={theme.neutral[900]} size={12} />
                            <MaterialCommunityIcons name="arrow-right" size={25} />
                        </Pressable>
                    </View>
                )}
                <View style={{marginTop: scale(20)}}>
                    <Input label="Password" icon={
                            <Pressable onPress={()=> setSecure(!secure)}>
                                <MaterialCommunityIcons color={theme.neutral[500]} name={secure ? "eye-outline" : "eye-off-outline"} size={scale(25)} />
                            </Pressable>
                        } />
                    <View style={{flexDirection: "row"}}>
                        <Checkbox checked={isChecked} mode="light" onPress={()=> toggleCheck(!isChecked)} />
                        <View style={{marginLeft: scale(7)}}>
                            <RegularText title="I agree to the" size={12} color={theme.neutral[700]} />
                        </View>
                        <View style={{marginHorizontal: scale(2)}}>
                            <SemiBoldText title="Terms" size={12} color={theme.neutral[700]} />
                        </View>
                        <View style={{marginRight: scale(2)}}>
                            <RegularText title="and" size={12} color={theme.neutral[700]} />
                        </View>
                        <View>
                            <SemiBoldText title="Conditions" size={12} color={theme.neutral[700]} />
                        </View>
                    </View>
                </View>
                <View style={{marginTop: scale(20)}}>
                    <Button title="Create account" color={theme.primary.main} onPress={()=> nav("Verify")} />
                </View>
                <View style={{marginTop: scale(10), height: scale(50), justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
                    <View style={{width: "40%", marginRight: scale(15), height: scale(1), backgroundColor: theme.neutral.main}} />
                    <MediumText title="Or" size={12} color={theme.neutral[900]} />
                    <View style={{width: "40%", marginLeft: scale(15), height: scale(1), backgroundColor: theme.neutral.main}} />
                </View>
                <View style={{marginTop: scale(10)}}>
                    <Button outline title="Join with Google" color={theme.neutral[200]} textColor={theme.neutral[900]}
                        icon={<FontAwesome name="google" size={scale(20)} style={{marginRight: scale(10)}} />} iconPosition="left"
                     />
                </View>
                <View style={{marginTop: scale(10)}}>
                    <Button outline title="Join with Facebook" color={theme.neutral[200]} textColor={theme.neutral[900]}
                        icon={<FontAwesome name="facebook-f" size={scale(20)} style={{marginRight: scale(10)}} />} iconPosition="left"
                     />
                </View>
            </ScrollView>
            {showLogin ? (
                <View style={{position: "absolute", bottom: scale(10), width: "100%", flexDirection: "row", justifyContent: "center", zIndex: 1000}}>
                    <RegularText title="Already have an account?" color={theme.neutral[700]} size={12} />
                    <Pressable style={{marginLeft: scale(5)}} onPress={()=> navigation.navigate("Login")}>
                        <SemiBoldText title="Login" color={theme.neutral[900]} size={12} />
                    </Pressable>
                </View>
            ) : (null)}
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

export default Register
