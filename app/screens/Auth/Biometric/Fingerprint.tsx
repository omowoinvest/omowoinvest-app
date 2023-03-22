import React, { FC, useRef } from 'react';
import { View, Image, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../../components/Container/Container';
import { RegularText, SemiBoldText } from '../../../components/Typography/Typography';
import { RootState } from '../../../store/store';
import scale from '../../../utils/scale';
import Button from '../../../components/Buttons/Button'
import { Screen } from '../../../utils/types';
import * as LocalAuthentication from 'expo-local-authentication';
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import Ionicons from '@expo/vector-icons/Ionicons';

const Fingerprint: FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const actionSheetRef = useRef<ActionSheetRef>(null);

    const verifyFingerPrint = async ()=> {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        // const authTypes = await LocalAuthentication.supportedAuthenticationTypesAsync()
        if(hasHardware) {
            try {
                const res = await LocalAuthentication.authenticateAsync();
                console.log(res);
                showConfirmation();
            }
            catch(err) {
                console.log(err);
            }
        }
    }

    const showConfirmation = ()=> {
        actionSheetRef.current?.show();
    }

    const hideConfirmation = ()=> {
        actionSheetRef.current?.hide();
    }

    return (
        <Container style={{paddingHorizontal: scale(20)}}>
            <View style={{flex: 8, justifyContent: "center", alignItems: "center"}}>
                <Image source={require('../../../../assets/img/fingerprint.png')} style={{height: scale(110), width: scale(110), resizeMode: "contain"}} />
                <View style={{marginTop: scale(20)}}>
                    <SemiBoldText title="Enable fingerprint login" size={20} color={theme.neutral[900]} />
                </View>
                <View style={{marginTop: scale(20)}}>
                    <RegularText lines={5} textAlign="center" title="You're one step closer to giving your kids a secure financial future." size={16} color={theme.neutral[800]} />
                </View>
            </View>
            <View style={{flex: 4, justifyContent: "center"}}>
                <Button title="Enable fingerprint" color={theme.primary.main} onPress={verifyFingerPrint} />
                <View style={{marginTop: scale(10)}}>
                    <Button outline title="Later" textColor={theme.primary.main} onPress={()=> navigation.navigate("VerifyIndex")} />
                </View>
            </View>
            <ActionSheet ref={actionSheetRef} openAnimationConfig={{bounciness: 0}} containerStyle={{padding: scale(20), borderTopRightRadius: scale(20), borderTopLeftRadius: scale(20)}}>
                <Pressable onPress={hideConfirmation} style={{alignItems: "flex-end"}}>
                    <Ionicons name="close-outline" size={25} color={theme.neutral[700]} />
                </Pressable>
                <View style={{alignItems: "center", marginTop: scale(50)}}>
                    <Image source={require("../../../../assets/img/fingerprint-success.png")} style={{height: scale(110), width: scale(110), resizeMode: "contain"}} />
                </View>
                <View style={{marginVertical: scale(30)}}>
                    <SemiBoldText title="Fingerprint login successfully enabled" size={16} textAlign="center" lines={3} color={theme.neutral[900]} />
                </View>
                <Button title="Continue" textColor={theme.light}
                    onPress={()=> {
                        hideConfirmation();
                        navigation.navigate("VerifyIndex")
                    }} 
                />
            </ActionSheet>
        </Container>
    )
}

export default Fingerprint
