import React, { useEffect, useState } from 'react';
import { StyleSheet, StatusBar  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoggedOutStack from '../Navigation/LoggedOutStack';
import LoggedInStack from '../Navigation/LoggedInStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import {toggleLoggedIn, toggleReady}  from '../store/appSettings';
import {updateUserState}  from '../store/userSlice';
import { RootState } from '../store/store';

const BottomTabs = createBottomTabNavigator();
interface Props {
    store?: any,
}

const MainApp: React.FC<Props> = props => {
    console.log(props);
    // const [isAppReady, setReady]: any = useState(false);
    // const [isLoggedIn, setLoggedIn]: any = useState(false);
    const {isLoggedIn, isAppReady} = useSelector((state: RootState) => state.appSetting);
    const dispatch = useDispatch();

    useEffect(() => {
        const prepare = async ()=> {
          try {
            // Keep the splash screen visible while we fetch resources
            AsyncStorage.getItem('user').then( async (res: any)=> {
                console.log(res);
                if (res) {
                    const obj = JSON.parse(res);
                    console.log(obj);
                    const token: any = await AsyncStorage.getItem("token");
                    console.log(token);
                    dispatch(updateUserState({user: obj, token: JSON.parse(token)}))
                    dispatch(toggleLoggedIn()); //true if user exists
                }
                else {
                    // setTimeout(() => {
                    //     dispatch(toggleReady());
                    // }, 300);
                }
            })
          } catch (e) {
            console.log(e);
          } finally {
            setTimeout(async ()=> {
                // await SplashScreen.hideAsync();
                if(!isAppReady) {
                    dispatch(toggleReady());
                }
            }, 300) 
          }
        }
        prepare();
    }, []);

    // const renderDrawer = (navProps: any) => {
    //     return (
    //         <SideMenu navigation={navProps.navigation} />
    //     );
    // }

    // render() {
        return (
            <>
                {isAppReady ? (
                    <>
                        {isLoggedIn ? (
                            <NavigationContainer>
                                <BottomTabs.Navigator initialRouteName="LoggedInStack"
                                    screenOptions={{
                                        title: '',
                                        headerTitleAlign: 'left',
                                        header: ()=> null,
                                        // headerTransparent: true
                                    }} 
                                >
                                    <BottomTabs.Screen name="LoggedInStack" component={LoggedInStack} />
                                </BottomTabs.Navigator>
                                {/* <LoggedInStack /> */}
                            </NavigationContainer>
                            ) : ( 
                                <NavigationContainer>
                                    <LoggedOutStack />
                                </NavigationContainer>
                        )}
                    </>
                ) : (
                    null
                )}
            </>
        );
    // }
}

const styles = StyleSheet.create({
    defaultHeader: {
        backgroundColor: 'transparent',
    },
    backBtn: {
        backgroundColor: 'transparent', 
        padding: 2, 
        marginLeft: 20, 
        width: 30, 
        height: 30, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
})

export default MainApp;
