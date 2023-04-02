import React, { FC } from 'react';
import { View, Pressable, StyleSheet, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Button from '../../components/Buttons/Button';
import Container from '../../components/Container/Container';
import { RegularText, SemiBoldText } from '../../components/Typography/Typography';
import { RootState } from '../../store/store';
import scale from '../../utils/scale';
import { AlertConfig, Screen } from '../../utils/types';

const SelectSerial: FC<Screen> = ({navigation, route}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const kidNo = route?.params?.kidNo;

    const nav = (route: string)=> {
        navigation.navigate(route);
    }
    return (
        <Container style={{paddingHorizontal: scale(20)}}>
            <StatusBar backgroundColor={theme.light} barStyle="dark-content" />
            <View style={{flex: 10}}>
                <SemiBoldText title={`Yay! Welldone on being a parent of ${kidNo}`} size={24} color={theme.neutral[900]} lines={10} />
                <RegularText title="Choose any of these to create a profile for your kids respectively:" color={theme.neutral[800]} size={16} lines={10} />
                <ScrollView>
                    <Pressable style={[styles.item, {backgroundColor: theme.primary.main}]} onPress={()=> nav('NumberOfKids')}>
                        <View style={{flex: 4, alignItems: "center", justifyContent: "center"}}>
                            <View style={[styles.ellipse, {backgroundColor: theme.primary[400]}]} />
                        </View>
                        <View style={{flex: 8, alignItems: "center", justifyContent: "center"}}>
                            <SemiBoldText title="First kid profile" color={theme.light} size={16} />
                        </View>
                    </Pressable>
                    <Pressable style={[styles.item, {backgroundColor: theme.primary.main}]} onPress={()=> nav('NumberOfKids')}>
                        <View style={{flex: 4, alignItems: "center", justifyContent: "center"}}>
                            <View style={[styles.ellipse, {backgroundColor: theme.primary[400]}]} />
                        </View>
                        <View style={{flex: 8, alignItems: "center", justifyContent: "center"}}>
                            <SemiBoldText title="Second kid profile" color={theme.light} size={16} />
                        </View>
                    </Pressable>
                    <Pressable style={[styles.item, {backgroundColor: theme.primary.main}]} onPress={()=> nav('NumberOfKids')}>
                        <View style={{flex: 4, alignItems: "center", justifyContent: "center"}}>
                            <View style={[styles.ellipse, {backgroundColor: theme.primary[400]}]} />
                        </View>
                        <View style={{flex: 8, alignItems: "center", justifyContent: "center"}}>
                            <SemiBoldText title="Third kid profile" color={theme.light} size={16} />
                        </View>
                    </Pressable>
                </ScrollView>
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
        marginTop: scale(10),
        flexDirection: "row"
    },
    ellipse: {
        height: scale(64), 
        width: scale(64), 
        borderRadius: scale(32),
    }
})

export default SelectSerial
