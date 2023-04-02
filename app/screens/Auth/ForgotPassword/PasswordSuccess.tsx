import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-animatable';
import { useSelector } from 'react-redux';
import Button from '../../../components/Buttons/Button';
import Container from '../../../components/Container/Container';
import { SemiBoldText } from '../../../components/Typography/Typography';
import { RootState } from '../../../store/store';
import scale from '../../../utils/scale';
import { Screen } from '../../../utils/types';

const PasswordSuccess: FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    return (
        <Container style={{paddingHorizontal: scale(20)}}>
            <View style={{flex: 8, justifyContent: "center", alignItems: "center"}}>
                <Image source={require('../../../../assets/img/pin-success.png')} style={{height: scale(110), width: scale(110), resizeMode: "contain"}} />
                <View style={{marginTop: scale(20)}}>
                    <SemiBoldText title="Password successfully created" textAlign="center" size={20} color={theme.neutral[900]} lines={5} />
                </View>
            </View>
            <View style={{flex: 4, justifyContent: "center"}}>
                <Button title="Continue" color={theme.primary.main} onPress={()=> navigation.navigate("EnterNewPin")} />
            </View>
        </Container>
    )
}

export default PasswordSuccess
