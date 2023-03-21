import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Onboarding from '../screens/Auth/Onboarding/Onboarding';
import Login from '../screens/Auth/Login/Login';
import Register from '../screens/Auth/Register/Register';
import Verify from '../screens/Auth/Verify/Verify';
import CreatePin from '../screens/Auth/CreatePin/CreatePin';
import PinLogin from '../screens/Auth/Login/PinLogin';
import CONSTANTS from '../utils/constants';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import scale from '../utils/scale';
import PinSuccess from '../screens/Auth/CreatePin/PinSuccess';
import Fingerprint from '../screens/Auth/Biometric/Fingerprint';

const Stack = createStackNavigator();
const LoggedOutStack = () => {
    const {IS_ANDROID, IS_IOS} = CONSTANTS;
    const Transition = IS_ANDROID ? TransitionPresets.FadeFromBottomAndroid : IS_IOS ? TransitionPresets.SlideFromRightIOS : null
    const {theme} = useSelector((state: RootState) => state.appSetting);
    return (
        <>
        <StatusBar backgroundColor={"#FBFEFF"} translucent={false} />
        <Stack.Navigator initialRouteName = "Onboarding" screenOptions={({ navigation }: any) => ({
            ...Transition,
            headerStyle: {
                backgroundColor: theme.bg,
            },
            // presentation: 'transparentModal', 
            contentStyle: { backgroundColor: 'white'},
            })}
        >
            {/* available screens for logged out users */}
            <Stack.Screen name="Onboarding" component={Onboarding as React.FC} options={{
                header: ()=> (null),
            }} />
            <Stack.Screen name="Login" component={Login as React.FC} options={{
                header: ()=> (null),
            }} />
            <Stack.Screen name="Register" component={Register as React.FC} options={{
                header: ()=> (null),
            }} />
            <Stack.Screen name="Verify" component={Verify as React.FC} options={{
                header: ()=> (null),
            }} />
            <Stack.Screen name="CreatePin" component={CreatePin as React.FC} options={{
                headerTitle: "",
                headerStyle: {
                    backgroundColor: theme.bg,
                },
                headerShadowVisible: false,
            }} />
            <Stack.Screen name="PinSuccess" component={PinSuccess as React.FC} options={{
                headerTitle: "",
                headerStyle: {
                    backgroundColor: theme.bg,
                },
                headerShadowVisible: false,
            }} />
            <Stack.Screen name="PinLogin" component={PinLogin as React.FC} options={{
                header: ()=> (null),
            }} />
            <Stack.Screen name="Fingerprint" component={Fingerprint as React.FC} options={{
                header: ()=> (null),
            }} />
        </Stack.Navigator>
        </>
    )
}

export default LoggedOutStack
