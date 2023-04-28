import React, { FC, ReactNode } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { BottomTabBarButtonProps, BottomTabHeaderProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import Wallet from '../Wallet/Wallet';
import Chat from '../Chat/Chat';
import Budget from '../Budget/Budget';
import More from '../More/More';
import type { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import scale from '../../utils/scale';
import { Screen } from '../../utils/types';
import CONSTANTS from '../../utils/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { BoldText } from '../../components/Typography/Typography';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {HomeActive, HomeInactive, BudgetActive, BudgetInactive, WalletActive, WalletInactive, ChatActive, ChatInactive, MoreActive, MoreInactive } from './Icons'; 

const Tab = createBottomTabNavigator();

const HomeTabs = (drawerProps: DrawerScreenProps<any>) => {
    console.log(drawerProps);
    const {theme} = useSelector((state: RootState) => state.appSetting);
    StatusBar.setBackgroundColor('white', true);
    StatusBar.setBarStyle("dark-content");
    // StatusBar.setTranslucent(true);
    const [tabState, setTabState] = React.useState({});

    return (
        <Tab.Navigator initialRouteName = "Home" screenOptions = {({ route, navigation }: any) => ({
            // headerStyle: {
            //     backgroundColor: theme.primary,
            // },
            tabBarStyle: {
                // paddingVertical: scale(10),
                height: '8%',
                backgroundColor: theme.light,
                // justifyContent: 'center'
            },
            tabBarIcon: ({ focused, color, size }: any) => {
                // let iconName: any;
                let IconComponent: ReactNode;
                if (route.name === 'Home') {
                    size = focused ? scale(30) : scale(25);
                    color = focused ? theme.primary.main : theme.neutral.main;
                    IconComponent = focused ? <HomeActive height={size} width={size} /> : <HomeInactive height={size} width={size} /> ; 
                } 
                else if (route.name === 'Budget') {
                    size = focused ? scale(30) : scale(25);
                    color = focused ? theme.primary.main : theme.neutral.main;
                    IconComponent = focused ? <BudgetActive height={size} width={size} /> : <BudgetInactive height={size} width={size} /> ; 
                }
                else if (route.name === 'Wallet') {
                    size = focused ? scale(30) : scale(25);
                    color = focused ? theme.primary.main : theme.neutral.main;
                    IconComponent = focused ? <WalletActive height={size} width={size} /> : <WalletInactive height={size} width={size} /> ; 
                }
                else if (route.name === 'Chat') {
                    size = focused ? scale(30) : scale(25);
                    color = focused ? theme.primary.main : theme.neutral.main;
                    IconComponent = focused ? <ChatActive height={size} width={size} /> : <ChatInactive height={size} width={size} /> ; 
                }
                else if (route.name === 'More') {
                    size = focused ? scale(30) : scale(25);
                    color = focused ? theme.primary.main : theme.neutral.main;
                    IconComponent = focused ? <MoreActive height={size} width={size} /> : <MoreInactive height={size} width={size} /> ; 
                }
                return IconComponent;
            },
            tabBarInactiveTintColor: theme.neutral[500],
            tabBarActiveTintColor: theme.primary.main,
            tabBarLabelStyle: {
                fontSize: scale(12),
                fontFamily: "Inter-Medium"
            },
        })}
        >
            <Tab.Screen name="Home" component={Home as FC} 
                options = {{
                    headerLeftContainerStyle: {
                        paddingHorizontal: 20
                    },
                    headerShown: false,
                }} 
            />
            <Tab.Screen name="Budget" component={Budget} options = {({navigation})=> ({
                    headerTitle: 'Budget',
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                })}
            />
            <Tab.Screen name="Wallet" component={Wallet} options = {({navigation})=> ({
                headerTitleAlign: "center",
                headerShadowVisible: false,
            })} />
            <Tab.Screen name="Chat" component={Chat as FC} options = {({navigation})=> ({
                headerLeftContainerStyle: {
                    paddingHorizontal: 20
                },
                headerShadowVisible: false,
            })} />
            <Tab.Screen name="More" component={More} options = {({navigation})=> ({
                headerTitle: 'More',
                headerTitleAlign: 'center',
                headerShadowVisible: false,
            })}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        paddingTop: StatusBar.currentHeight, 
        paddingHorizontal: scale(10), 
        paddingBottom: scale(10),
    }
})

export default HomeTabs;
