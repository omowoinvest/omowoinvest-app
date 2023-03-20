import React from 'react';
import { createStackNavigator, StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';
import HomeTabs from '../screens/HomeTabs/HomeTabs';
// import Payment from '../screens/Payment/Payment';
// import Help from '../screens/Help/Help';
import { StackScreenProps } from '@react-navigation/stack';
import { Image, StatusBar, StyleSheet, Platform } from 'react-native';
import scale from '../utils/scale';
import type { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import CONSTANTS from '../utils/constants';

const Stack = createStackNavigator();
// const LoggedInStack = (stackProps: StackScreenProps<any>) => {
const LoggedInStack = () => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const {IS_ANDROID, IS_IOS} = CONSTANTS;
    const Transition = IS_ANDROID ? TransitionPresets.FadeFromBottomAndroid : IS_IOS ? TransitionPresets.SlideFromRightIOS : null
    StatusBar.setBackgroundColor(theme.primary.main, true);
    StatusBar.setTranslucent(false);
    const screenOptions: StackNavigationOptions = {
        headerTitleAlign: 'center',
        headerStatusBarHeight: StatusBar.currentHeight,
    }
    return (
        <Stack.Navigator initialRouteName = "HomeTabs" screenOptions={({ navigation }: any) => ({
            // ...TransitionPresets.FadeFromBottomAndroid,
            ...Transition,
            headerTitleAlign: "center",
            headerTitleStyle: {
                fontFamily: "GeneralSans-Semibold",
                // fontSize: scale(24)
            },
            })}
        >
            {/* available screens for logged in users */}
            <Stack.Screen name="HomeTabs" component={HomeTabs as React.FC} options={{
                header: ()=> null,
            }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        paddingTop: StatusBar.currentHeight, 
        paddingHorizontal: scale(10), 
        paddingBottom: scale(10),
    }
})

export default LoggedInStack

