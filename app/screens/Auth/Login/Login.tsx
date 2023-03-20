import React from 'react'
import { View, Text, Button, Pressable, ScrollView, StatusBar, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../../components/Container/Container';
import Input from '../../../components/Inputs/TextInput';
import { BoldText, RegularText } from '../../../components/Typography/Typography';
import { RootState } from '../../../store/store';
import scale from '../../../utils/scale';
import { validateEmail } from '../../../utils/utils';

const Login = () => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    return (
        <Container>
            <BoldText title={"Title"} />
        </Container>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: scale(35),
        width: scale(35),
        resizeMode: "contain"
    }
})

export default Login
