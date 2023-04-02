import React, { FC, useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Pressable, Keyboard } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import Input from '../../components/Inputs/TextInput';
import { MediumText, RegularText, SemiBoldText } from '../../components/Typography/Typography';
import { RootState } from '../../store/store';
import scale from '../../utils/scale';
import {Screen} from "../../utils/types";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { errorHandler, successHandler, validateEmail, validatePhone } from '../../utils/utils'
import Checkbox from '../../components/Checkbox/Checkbox';
import Button from '../../components/Buttons/Button';

const NumberOfKids: FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const [kidNo, setKidNo] = useState("");

    const nav = (route: string)=> {
        navigation.navigate(route, {kidNo: kidNo});
    }

    return (
        <Container>
            <ScrollView contentContainerStyle={{padding: scale(20)}}>
                <View style={{alignItems: "flex-start"}}>
                    <SemiBoldText title="How many kids do you have?" color={theme.neutral[900]} lines={5} size={24} />
                </View>
                <View style={{marginTop: scale(20)}}>
                    <Input label="" placeholder="e.g 1" keyboardType="number-pad" value={kidNo} onChangeText={setKidNo} />
                </View>
                <View style={{marginTop: scale(10)}}>
                    <Button title="Continue" color={theme.primary.main} onPress={()=> nav("SelectSerial")} />
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

export default NumberOfKids
