import React, { FC } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import { BlockText, MediumText, RegularText, SemiBoldText } from '../../components/Typography/Typography';
import { RootState } from '../../store/store';
import scale from '../../utils/scale';
import { Screen } from '../../utils/types';
import SunIcon from '../../../assets/icons/sun.svg';
import NotificationIcon from '../../../assets/icons/notification.svg';
import IconButton from '../../components/Buttons/IconButton';
import ContactIcon from '../../../assets/icons/contacts.svg';
import Button from '../../components/Buttons/Button';
import ChevronRight from '../../../assets/icons/chevron-right.svg';

const Home: FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    return (
        <Container style={{paddingTop: scale(15), paddingHorizontal: scale(15)}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.title}>
                    <View>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <RegularText title="Good morning" size={14} color={theme.neutral[700]} />
                            <View style={{marginLeft: scale(7)}}>
                                <SunIcon height={scale(16)} width={scale(16)} />
                            </View>
                        </View>
                        <SemiBoldText title="Anita" size={20} color={theme.neutral[900]} />
                    </View>
                    <IconButton badge backgroundColor={theme.primary[50]}
                        icon={
                            <NotificationIcon height={scale(25)} width={scale(25)} />
                        } 
                    />
                </View>
                <View style={[styles.identityBox, {backgroundColor: theme.neutral[900], }]}>
                    <View style={{marginRight: scale(10)}}>
                        <ContactIcon />
                    </View>
                    <View>
                        <MediumText title="Identity not verified" size={14} color={theme.light} />
                    </View>
                    <Pressable style={{marginLeft: "auto"}}>
                        <SemiBoldText title="Verify now" size={14} />
                    </Pressable>
                </View>
                <View style={[styles.createProfileBox, styles.boxShadow, {backgroundColor: theme.light, borderColor: theme.neutral[200]}]}>
                    <Image source={require('../../../assets/img/group.png')} style={{height: scale(51), width: scale(64), resizeMode: "contain", marginBottom: scale(20)}} />
                    <MediumText 
                        title="It seems you haven’t created profiles for your kids. Click the button below to start." 
                        size={12}
                        color={theme.neutral[600]}
                        lines={5}
                        textAlign="center"
                    />
                    <Pressable style={[styles.createButton, {backgroundColor: theme.primary[50]}]}>
                        <MediumText title="Create Profile" size={16} />
                    </Pressable>
                </View>
                <View style={{marginTop: scale(20)}}>
                    <Pressable style={[{borderColor: theme.neutral[200], backgroundColor: theme.light}, styles.listItem]}>
                        <View style={[styles.listIconBox, {backgroundColor: theme.primary.main}]}>
                            <Image source={require('../../../assets/img/tree.png')} style={{width: scale(43), height: scale(48)}} />
                        </View>
                        <View style={{flex: 7.5, paddingLeft: scale(10)}}>
                            <SemiBoldText title="Start Investing" size={16} color={theme.neutral[900]} />
                            <RegularText title="See our diverse set of plans and invest" lines={2} size={12} color={theme.neutral[700]} />
                        </View>
                        <View style={{ flex: 0.5, justifyContent: "center"}}>
                            <ChevronRight />
                        </View>
                    </Pressable>
                    <Pressable style={[{borderColor: theme.neutral[200], backgroundColor: theme.light, marginTop: scale(10)}, styles.listItem]}>
                        <View style={[styles.listIconBox, {backgroundColor: theme.warning[500]}]}>
                            <Image source={require('../../../assets/img/bulls-eye.png')} style={{width: scale(43), height: scale(48), resizeMode: "contain"}} />
                        </View>
                        <View style={{flex: 7.5, paddingLeft: scale(10)}}>
                            <SemiBoldText title="Start Saving" size={16} color={theme.neutral[900]} />
                            <RegularText title="Start saving towards a goal for your kids" lines={2} size={12} color={theme.neutral[700]} />
                        </View>
                        <View style={{ flex: 0.5, justifyContent: "center"}}>
                            <ChevronRight />
                        </View>
                    </Pressable>
                </View>
                <View style={{flexDirection: "row", marginTop: scale(10)}}>
                    <Pressable style={{flex: 1, height: scale(98), marginRight: scale(5)}}>
                        <Image source={require('../../../assets/img/chat-with-expert.png')} style={{flex: 1, resizeMode: "contain", height: "100%", width: "100%"}} />
                    </Pressable>
                    <Pressable style={{flex: 1, height: scale(98), marginLeft: scale(5)}}>
                        <Image source={require('../../../assets/img/financial-tips.png')} style={{flex: 1, resizeMode: "contain", height: "100%", width: "100%"}} />
                    </Pressable>
                </View>
                <View style={{marginTop: scale(10)}}>
                    <Pressable style={{height: scale(124), }}>
                        <Image source={require('../../../assets/img/rewards.png')} style={{resizeMode: "contain", height: "100%", width: "100%"}} />
                    </Pressable>
                </View>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    title: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center" 
    },
    identityBox: {
        flexDirection: "row",
        paddingVertical: scale(10), 
        paddingHorizontal: scale(10),
        borderRadius: scale(8),
        // marginHorizontal: scale(3),
        alignItems: "center",
        marginTop: scale(10),
    },
    createProfileBox: {
        borderWidth: scale(1),
        borderRadius: scale(8),
        paddingVertical: scale(20),
        paddingHorizontal: scale(20),
        marginTop: scale(16),
        alignItems: "center",
        justifyContent: "center",
    },
    createButton: {
        minHeight: scale(34), 
        borderRadius: scale(43),
        paddingVertical: scale(5), 
        paddingHorizontal: scale(20), 
        marginTop: scale(24),
    },
    listItem: {
        borderWidth: scale(0.5), 
        borderRadius: scale(8), 
        padding: scale(10), 
        flexDirection: "row",
        // marginVertical: scale(5),
    },
    listIconBox: {
        borderRadius: scale(4),
        flex: 4, 
        alignItems: "center", 
        justifyContent: "center",
    },
    boxShadow: {
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 8,
    },
})

export default Home
