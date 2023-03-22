import React, { FC, useRef } from 'react';
import { View, Image, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../../components/Container/Container';
import { RegularText, SemiBoldText } from '../../../components/Typography/Typography';
import { RootState } from '../../../store/store';
import scale from '../../../utils/scale';
import Button from '../../../components/Buttons/Button'
import { Screen } from '../../../utils/types';
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import Ionicons from '@expo/vector-icons/Ionicons';

const VerifyIndex: FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const actionSheetRef = useRef<ActionSheetRef>(null);

    const showConfirmation = ()=> {
        actionSheetRef.current?.show();
    }

    const hideConfirmation = ()=> {
        actionSheetRef.current?.hide();
    }

    const nav = (route: string)=> {
        navigation.navigate(route);
    }

    return (
        <Container style={{padding: scale(20)}}>
            <View style={{flex: 8, justifyContent: "center", alignItems: "center"}}>
                <Image source={require('../../../../assets/img/identity.png')} style={{height: scale(110), width: scale(110), resizeMode: "contain"}} />
                <View style={{marginTop: scale(20)}}>
                    <SemiBoldText title="Verify your identity" size={20} color={theme.neutral[900]} />
                </View>
                <View style={{marginTop: scale(20)}}>
                    <RegularText lines={5} textAlign="center" title="This process takes less than 2 minutes, provide your BVN to complete your verification. This step is required  to help protect your account." size={16} color={theme.neutral[800]} />
                </View>
            </View>
            <View style={{flex: 4, justifyContent: "center"}}>
                <Button title="Continue" color={theme.primary.main} onPress={()=> nav("VerifyId")} />
                <View style={{marginTop: scale(10)}}>
                    <Button outline title="Skip" textColor={theme.primary.main} onPress={()=> showConfirmation()} />
                </View>
            </View>
            <ActionSheet ref={actionSheetRef} openAnimationConfig={{bounciness: 0}} containerStyle={{padding: scale(20), borderTopRightRadius: scale(20), borderTopLeftRadius: scale(20)}}>
                <Pressable onPress={hideConfirmation} style={{alignItems: "flex-end"}}>
                    <Ionicons name="close-outline" size={25} color={theme.neutral[700]} />
                </Pressable>
                <View style={{alignItems: "center", marginTop: scale(20)}}>
                    <Image source={require("../../../../assets/img/caution.png")} style={{height: scale(110), width: scale(110), resizeMode: "contain"}} />
                </View>
                <View style={{marginTop: scale(30)}}>
                    <SemiBoldText title="Are you sure you want to skip?" size={16} textAlign="center" lines={3} color={theme.neutral[900]} />
                    <View style={{marginTop: scale(10)}}>
                        <RegularText size={14}
                        title="You’ll need to verify your identity before you can begin investing or saving. If you skip this step now, you can verify your identity later from the home screen or settings page." textAlign="center" lines={15} color={theme.neutral[900]} />
                    </View>
                </View>
                <View style={{marginTop: scale(30)}}>
                    <Button title="Yes, skip" textColor={theme.light} />
                </View>
                <View style={{marginTop: scale(10)}}>
                    <Button outline title="Verify your identity now" textColor={theme.primary.main} 
                        onPress={()=> {
                            hideConfirmation();
                            nav("VerifyId");
                        }}  
                    />
                </View>
            </ActionSheet>
        </Container>
    )
}

export default VerifyIndex
