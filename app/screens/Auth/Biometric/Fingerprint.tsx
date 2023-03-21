import React, { FC } from 'react';
import { View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../../components/Container/Container';
import { RegularText, SemiBoldText } from '../../../components/Typography/Typography';
import { RootState } from '../../../store/store';
import scale from '../../../utils/scale';
import Button from '../../../components/Buttons/Button'
import { Screen } from '../../../utils/types';
import * as LocalAuthentication from 'expo-local-authentication';

const Fingerprint: FC<Screen> = () => {
    const {theme} = useSelector((state: RootState) => state.appSetting);

    const verifyFingerPrint = async ()=> {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        // const authTypes = await LocalAuthentication.supportedAuthenticationTypesAsync()
        if(hasHardware) {
            try {
                const res = await LocalAuthentication.authenticateAsync();
                console.log(res);
            }
            catch(err) {
                console.log(err);
            }
            
        }
    }

    return (
        <Container>
            <View style={{flex: 8, justifyContent: "center", alignItems: "center"}}>
                <Image source={require('../../../../assets/img/fingerprint.png')} style={{height: scale(110), width: scale(110), resizeMode: "contain"}} />
                <View style={{marginTop: scale(20)}}>
                    <SemiBoldText title="Enable fingerprint login" size={20} color={theme.neutral[900]} />
                </View>
                <View style={{marginTop: scale(20)}}>
                    <RegularText lines={5} textAlign="center" title="You're one step closer to giving your kids a secure financial future." size={16} color={theme.neutral[800]} />
                </View>
            </View>
            <View style={{flex: 4, justifyContent: "center", paddingHorizontal: scale(20)}}>
                <Button title="Enable fingerprint" color={theme.primary.main} onPress={verifyFingerPrint} />
                <View style={{marginTop: scale(10)}}>
                    <Button outline title="Later" textColor={theme.primary.main} />
                </View>
            </View>
        </Container>
    )
}

export default Fingerprint
