import React, { FC } from 'react';
import { View, Pressable, StyleSheet, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import Button from '../../components/Buttons/Button';
import Container from '../../components/Container/Container';
import { RegularText, SemiBoldText } from '../../components/Typography/Typography';
import { RootState } from '../../store/store';
import scale from '../../utils/scale';
import { AlertConfig, Screen } from '../../utils/types';

const CreateProfile: FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);

    const nav = (route: string)=> {
        navigation.navigate(route);
    }
    return (
        <Container style={{paddingHorizontal: scale(20)}}>
            <StatusBar backgroundColor={theme.light} barStyle="dark-content" />
            <View style={{flex: 2}}>
                <SemiBoldText title="Let’s create your kids’ profiles" size={24} color={theme.neutral[900]} lines={10} />
                <RegularText title="Choose one that fits you" color={theme.neutral[800]} size={16} />
            </View>
            <View style={{flex: 8}}>
                <Pressable style={[styles.item, {backgroundColor: theme.primary.main}]} onPress={()=> nav('NumberOfKids')}>
                    <SemiBoldText title="Parent" color={theme.light} size={18} />
                    <View>
                        <RegularText title="I have kids already that I want to make investments for" color={theme.light} size={14} lines={5} />
                    </View>
                </Pressable>
                <Pressable style={[styles.item, {backgroundColor: theme.success.main}]}  onPress={()=> nav('NumberOfKids')}>
                    <SemiBoldText title="Intending" color={theme.light} size={18} />
                    <View>
                        <RegularText title="I don’t have kids yet but I want to make investment for them" color={theme.light} size={14} lines={5} />
                    </View>
                </Pressable>
            </View>
            <View style={{flex: 2, flexDirection: "row", justifyContent: "center"}}>
                <View style={{width: "40%"}}>
                    <Button outline title="Skip" textColor={theme.primary.main} 
                        onPress={()=> {
                            navigation.reset({index: 0, routes: [{name: 'HomeTabs'}]})
                        }} />
                </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    item: {
        borderRadius: scale(8),
        padding: scale(20),
        marginTop: scale(10)
    }
})

export default CreateProfile
