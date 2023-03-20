import React, { FC, useState } from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../../components/Container/Container';
import Input from '../../../components/Inputs/TextInput';
import { RegularText, SemiBoldText } from '../../../components/Typography/Typography';
import { RootState } from '../../../store/store';
import scale from '../../../utils/scale';
import {Screen} from "../../../utils/types";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { errorHandler, successHandler, validateEmail, validatePhone } from '../../../utils/utils'
import Checkbox from '../../../components/Checkbox/Checkbox';
import Button from '../../../components/Buttons/Button';

const Register: FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const [isChecked, toggleCheck] = useState(false);
    return (
        <Container>
            <ScrollView contentContainerStyle={{padding: scale(20), paddingBottom: scale(40)}}>
                <View style={{alignItems: "center"}}>
                    <Image source={require("../../../../assets/img/logo.png")} style={styles.logo} />
                </View>
                <View style={{alignItems: "center", marginTop: scale(20)}}>
                    <SemiBoldText title="Enter your details correctly to create an account." color={theme.neutral[900]} 
                    textAlign="center" lines={3} />
                </View>
                <View style={{marginTop: scale(20)}}>
                    <Input label="Phone number" keyboardType="phone-pad" />
                    <View style={{flexDirection: "row", marginTop: scale(-10)}}>
                        <SemiBoldText title="Or use your email" color={theme.neutral[900]} size={12} />
                        <MaterialCommunityIcons name="arrow-right" size={25} />
                    </View>
                </View>
                <View style={{marginTop: scale(20)}}>
                    <Input label="Password" icon={<MaterialCommunityIcons name="eye-outline" size={25} color={theme.neutral[500]} />} />
                    <View style={{flexDirection: "row"}}>
                        <Checkbox checked={isChecked} mode="light" onPress={()=> toggleCheck(!isChecked)} />
                        <View style={{marginLeft: scale(7)}}>
                            <RegularText title="I agree to the" size={10} color={theme.neutral[700]} />
                        </View>
                        <View style={{marginHorizontal: scale(2)}}>
                            <SemiBoldText title="Terms" size={10} color={theme.neutral[700]} />
                        </View>
                        <View style={{marginRight: scale(2)}}>
                            <RegularText title="and" size={10} color={theme.neutral[700]} />
                        </View>
                        <View>
                            <SemiBoldText title="Conditions" size={10} color={theme.neutral[700]} />
                        </View>
                    </View>
                </View>
                <View style={{marginTop: scale(20)}}>
                    <Button title="Create account" color={theme.primary.main} />
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

export default Register
