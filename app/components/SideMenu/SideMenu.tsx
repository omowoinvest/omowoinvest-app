import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { Screen } from '../../utils/types';
import Container from '../Container/Container';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import scale from '../../utils/scale';
import { BoldText } from '../Typography/Typography';
import MenuItem from './MenuItem';
import { navigate } from '../../utils/utils';

const SideMenu: React.FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const {user} = useSelector((state: RootState) => state.userSlice);

    return (
        <Container style={{backgroundColor: theme.primary.main, paddingHorizontal: scale(10), paddingTop: StatusBar.currentHeight}}>
            <View style={{flex: 2, paddingTop: scale(20)}}>
                <Image source={require('../../../assets/img/user.png')} style={{height: scale(80), width: scale(80), resizeMode: 'contain'}} />
                <View style={{marginTop: scale(10)}}>
                    <BoldText title={"Hi " + user.fullName} color={theme.light.main} lines={2} size={32} />
                </View>
            </View>
            <View style={{flex: 6, paddingTop: scale(20), borderTopColor: theme.light.main, borderTopWidth: 1}}>
                <ScrollView>
                    <MenuItem title="Profile Settings" icon={<Image source={require('../../../assets/icons/profile.png')} 
                    style={styles.iconStyle} />} onPress={()=> navigate(navigation, 'Profile')} />
                    <MenuItem title="Event Ticket" icon={<Image source={require('../../../assets/icons/tickets.png')} 
                    style={styles.iconStyle} />} />
                    <MenuItem title="Wallet & Payment" icon={<Image source={require('../../../assets/icons/payment.png')} 
                    style={styles.iconStyle} />} />
                    <MenuItem title="Notifications" icon={<Image source={require('../../../assets/icons/notifications.png')} 
                    style={styles.iconStyle} />} />
                    <MenuItem title="Deliveries" icon={<Image source={require('../../../assets/icons/deliveries.png')} 
                    style={styles.iconStyle} />} />
                    <MenuItem title="Help & Support" icon={<Image source={require('../../../assets/icons/help.png')} 
                    style={styles.iconStyle} />} />
                </ScrollView>
            </View>
            <View style={{flex: 2, justifyContent: 'flex-end'}}>
                <MenuItem title="Logout" icon={<Image source={require('../../../assets/icons/logout.png')} 
                style={styles.iconStyle} />} />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    iconStyle: {
        height: scale(20),
        width: scale(20),
        resizeMode: 'contain',
    }
})

export default SideMenu
