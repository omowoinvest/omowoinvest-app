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
import VerifyIndex from '../screens/Auth/VerifyId/VerifyIndex';
import VerifyId from '../screens/Auth/VerifyId/VerifyId';
import EnterPassword from '../screens/Auth/CreateNewPin/EnterPassword';
import EnterNewPin from '../screens/Auth/CreateNewPin/EnterNewPin';
import ConfirmNewPin from '../screens/Auth/CreateNewPin/ConfirmNewPin';
import PinCreateSuccess from '../screens/Auth/CreateNewPin/PinCreateSuccess';

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
                headerLeftContainerStyle: {
                    paddingLeft: scale(10)
                },
            }} />
            <Stack.Screen name="PinLogin" component={PinLogin as React.FC} options={{
                header: ()=> (null),
            }} />
            <Stack.Screen name="Fingerprint" component={Fingerprint as React.FC} options={{
                header: ()=> (null),
            }} />
            <Stack.Screen name="VerifyIndex" component={VerifyIndex as React.FC} options={{
                header: ()=> (null),
            }} />
            <Stack.Screen name="VerifyId" component={VerifyId as React.FC} options={{
                headerTitle: "Verify your identity",
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: theme.bg,
                },
                headerLeftContainerStyle: {
                    paddingLeft: scale(10)
                },
                headerShadowVisible: false,
            }} />
            {/* recover pin */}
            <Stack.Screen name="EnterPassword" component={EnterPassword as React.FC} options={{
                headerTitle: "",
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: theme.bg,
                },
                headerLeftContainerStyle: {
                    paddingLeft: scale(10)
                },
                headerShadowVisible: false,
            }} />
            <Stack.Screen name="EnterNewPin" component={EnterNewPin as React.FC} options={{
                headerTitle: "",
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: theme.bg,
                },
                headerLeftContainerStyle: {
                    paddingLeft: scale(10)
                },
                headerShadowVisible: false,
            }} />
            <Stack.Screen name="ConfirmNewPin" component={ConfirmNewPin as React.FC} options={{
                headerTitle: "",
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: theme.bg,
                },
                headerLeftContainerStyle: {
                    paddingLeft: scale(10)
                },
                headerShadowVisible: false,
            }} />
            <Stack.Screen name="PinCreateSuccess" component={PinCreateSuccess as React.FC} options={{
                header: ()=> (null),
            }} />
        </Stack.Navigator>
        </>
    )
}

export default LoggedOutStack
