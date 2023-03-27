import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Pressable, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { BoldText, MediumText, SemiBoldText } from '../Typography/Typography';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Button } from '../Buttons/Button';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import CONSTANTS from '../../utils/constants';
import scale from '../../utils/scale';
import { Image } from 'react-native-animatable';
import * as LocalAuthentication from 'expo-local-authentication';

interface keyBoardProps {
    /** triggered on button press */
    onKeyPress: (value: string) => void,
    buttonTitle?: string,
    onComplete?: ()=> void,
    onBackSpace?: ()=> void,
    /** event triggered when keyboard becomes visible */
    onPresent?: ()=> void,
    /** disable complete button */
    disableComplete?: boolean,
    /** enables the use of biometric on keyboard */
    biometricEnabled?: boolean;
}

const CustomKeyboard : React.FC<keyBoardProps> = ({onKeyPress, buttonTitle, onBackSpace, onComplete, onPresent, disableComplete, biometricEnabled}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const {DEVICE_HEIGHT} = CONSTANTS;
    // const actionSheetRef: any = useRef<ActionSheetRef>(); 

    useEffect(() => {
        // actionSheetRef.current.show();
        onPresent ? onPresent() : null
    }, [])

    const verifyBiometric = async ()=> {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        // const authTypes = await LocalAuthentication.supportedAuthenticationTypesAsync()
        if(hasHardware) {
            try {
                const options: LocalAuthentication.LocalAuthenticationOptions = {
                    promptMessage: "Login with your fingerprint",
                    cancelLabel: "Cancel",
                    disableDeviceFallback: true,
                }
                const res = await LocalAuthentication.authenticateAsync(options);
                console.log(res);
            }
            catch(err) {
                console.log(err);
            }
        }
    }

    return (
        // <ActionSheet animated={false} ref={actionSheetRef} backgroundInteractionEnabled closable={false} onOpen={onPresent} containerStyle={{backgroundColor: theme.primary[600], borderTopEndRadius: 0, borderTopStartRadius: 0}}>
            <View>
            {/* <View style={{flex: 1}}> */}
                <View style={{flexDirection: 'row', width: '100%', height: scale(70)}}>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("1")} style={[styles.button, {borderColor: theme.neutral[400], backgroundColor: theme.light}]}>
                            <SemiBoldText size={32} title="1" color={theme.primary[500]} />
                        </Pressable>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("2")} style={[styles.button, {borderColor: theme.neutral[400], backgroundColor: theme.light}]}>
                            <SemiBoldText size={32} title="2" color={theme.primary[500]} />
                        </Pressable>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("3")} style={[styles.button, {borderColor: theme.neutral[400], backgroundColor: theme.light}]}>
                            <SemiBoldText size={32} title="3" color={theme.primary[500]} />
                        </Pressable>
                    </View>
                </View>
                <View style={{flexDirection: 'row', width: '100%', height: scale(70)}}>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("4")} style={[styles.button, {borderColor: theme.neutral[400], backgroundColor: theme.light}]}>
                            <SemiBoldText size={32} title="4" color={theme.primary[500]} />
                        </Pressable>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("5")} style={[styles.button, {borderColor: theme.neutral[400], backgroundColor: theme.light}]}>
                            <SemiBoldText size={32} title="5" color={theme.primary[500]} />
                        </Pressable>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("6")} style={[styles.button, {borderColor: theme.neutral[400], backgroundColor: theme.light}]}>
                            <SemiBoldText size={32} title="6" color={theme.primary[500]} />
                        </Pressable>
                    </View>
                </View>
                <View style={{flexDirection: 'row', width: '100%', height: scale(70)}}>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("7")} style={[styles.button, {borderColor: theme.neutral[400], backgroundColor: theme.light}]}>
                            <SemiBoldText size={32} title="7" color={theme.primary[500]} />
                        </Pressable>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("8")} style={[styles.button, {borderColor: theme.neutral[400], backgroundColor: theme.light}]}>
                            <SemiBoldText size={32} title="8" color={theme.primary[500]} />
                        </Pressable>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("9")} style={[styles.button, {borderColor: theme.neutral[400], backgroundColor: theme.light}]}>
                            <SemiBoldText size={32} title="9" color={theme.primary[500]} />
                        </Pressable>
                    </View>
                </View>
                <View style={{flexDirection: 'row', width: '100%', height: scale(70)}}>
                    <View style={{flex: 4, alignItems: "center"}}>
                        {biometricEnabled ? (
                            <Pressable onPress={verifyBiometric} style={[styles.fingerprintButton]}>
                                <Image source={require('../../../assets/img/fingerprint.png')} style={{resizeMode: "contain", flex: 1, alignSelf: "center"}} />
                            </Pressable>
                        ) : (null)}
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("0")} style={[styles.button, {borderColor: theme.neutral[400], backgroundColor: theme.light}]}>
                            <SemiBoldText size={32} title="0" color={theme.primary[500]} />
                        </Pressable>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={onBackSpace} style={[styles.button, {borderColor: theme.neutral[400], backgroundColor: theme.light}]}>
                            <MaterialCommunityIcons name="backspace-outline" color={theme.primary.main} size={35} />
                        </Pressable>
                    </View>
                </View>
            </View>
        // </ActionSheet>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: scale(30), 
        borderWidth: scale(1.5),
        alignItems: "center",
        justifyContent: "center",
        height: scale(60), 
        width: scale(60),
    },
    fingerprintButton: {
        alignItems: "center",
        justifyContent: "center",
        height: scale(60), 
        width: scale(60),
    }
})

export default CustomKeyboard
