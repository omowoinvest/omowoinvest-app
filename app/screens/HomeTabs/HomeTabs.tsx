import React, { FC, ReactNode } from 'react';
import { Pressable, StatusBar, Image, View, StyleSheet } from 'react-native';
import { BottomTabBarButtonProps, BottomTabHeaderProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import Wallet from '../Wallet/Wallet';
import Chat from '../Chat/Chat';
import Plans from '../Plans/Plans';
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

const Tab = createBottomTabNavigator();

const HomeTabs = (drawerProps: DrawerScreenProps<any>) => {
    console.log(drawerProps);
    const {theme} = useSelector((state: RootState) => state.appSetting);
    StatusBar.setBackgroundColor('white', true);
    // StatusBar.setTranslucent(true);
    const [tabState, setTabState] = React.useState({});

    return (
        <Tab.Navigator initialRouteName = "Home" screenOptions = {({ route, navigation }: any) => ({
            // headerStyle: {
            //     backgroundColor: theme.primary,
            // },
            tabBarStyle: {
                // paddingVertical: scale(10),
                // height: '7%',
                backgroundColor: theme.light,
                // justifyContent: 'center'
            },
            tabBarShowLabel: false,
            // headerTitleStyle: {
            //     color: colors.light
            // },
            tabBarIcon: ({ focused, color, size }: any) => {
                // let iconName: any;
                let IconComponent: ReactNode;
                // let iconColor;
                // console.log(focused);
                // console.log(route);
                if (route.name === 'Home') {
                    size = focused ? scale(20) : scale(20);
                    color = focused ? theme.primary.main : theme.neutral.main;
                    IconComponent = <MaterialCommunityIcons name="home-variant-outline" size={size} color={color} />; 
                } 
                else if (route.name === 'Plans') {
                    size = focused ? scale(20) : scale(20);
                    color = focused ? theme.primary.main : theme.neutral.main;
                    IconComponent = <MaterialCommunityIcons name="home-variant-outline" size={size} color={color} />;
                }
                else if (route.name === 'Wallet') {
                    size = focused ? scale(20) : scale(20);
                    color = focused ? theme.primary.main : theme.neutral.main;
                    IconComponent = <MaterialCommunityIcons name="home-variant-outline" size={size} color={color} />;
                }
                else if (route.name === 'Chat') {
                    size = focused ? scale(20) : scale(20);
                    color = focused ? theme.primary.main : theme.neutral.main;
                    IconComponent = <MaterialCommunityIcons name="home-variant-outline" size={size} color={color} />;
                }
                else if (route.name === 'More') {
                    size = focused ? scale(20) : scale(20);
                    color = focused ? theme.primary.main : theme.neutral.main;
                    IconComponent = <MaterialCommunityIcons name="home-variant-outline" size={size} color={color} />;
                }
    
                // You can return any component that you like here!
                // return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                return IconComponent;
            },
            // tabBarInactiveTintColor: colors.medium,
            tabBarLabelStyle: {
                // fontSize: 13,
                color: theme.light
                // fontFamily: 'CircularStd-Book'
            },
        })}
        // screenListeners={{
        //     // state: (state)=> {
        //     //     setTabState(state);
        //     //     console.log(tabState);
        //     // },
        //     tabPress: e => {
        //         console.log(e);
        //     }
        // }}
        >
            <Tab.Screen name="Home" component={Home as FC} 
                options = {{
                    headerLeftContainerStyle: {
                        paddingHorizontal: 20
                    },
                }} 
            />
            <Tab.Screen name="Plans" component={Plans} options = {({navigation})=> ({
                headerTitle: 'Plans',
                headerTitleAlign: 'center',
                headerShadowVisible: false,
            })}   
                // listeners={({ navigation, route }) => ({
                //     tabPress: (e) => {
                //     // Prevent default action
                //     e.preventDefault();
                //     // Do something with the `navigation` object
                //     navigation.navigate('Transfer');
                //     },
                // })}
              />
            <Tab.Screen name="Wallet" component={Wallet} options = {({navigation})=> ({
                // headerTitle: ()=> (
                //     <HeaderTitle title = "Transactions" color={colors.light} />
                // ),
                headerTitleAlign: "center",
                // headerLeftContainerStyle: {
                //     paddingLeft: 20
                // },
                headerShadowVisible: false,
            })} />
            <Tab.Screen name="Wallet" component={Wallet} options = {({navigation})=> ({
                // title: 'More',
                headerLeftContainerStyle: {
                    paddingHorizontal: 20
                },
                headerTitle: '',
                headerShadowVisible: false,
            })} />
            <Tab.Screen name="Chat" component={Chat as FC} options = {({navigation})=> ({
                // title: 'More',
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
