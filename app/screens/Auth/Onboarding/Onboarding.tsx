import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import { useSelector } from 'react-redux';
import Button from '../../../components/Buttons/Button';
import Container from '../../../components/Container/Container';
import { RegularText, SemiBoldText } from '../../../components/Typography/Typography';
import { RootState } from '../../../store/store';
import scale from '../../../utils/scale';
import {Screen} from "../../../utils/types";


const Onboarding: FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const [currentIndex, setCurrentIndex] = useState(0); //current index of slider
    const indicators = [0,1,2,3,4]; // indicator length
    const [currentTitle, setCurrentTitle] = useState({
        title: "Welcome to Omowo", 
        description: "We're here to help you save, and make long term investments for your little ones."
    });
    const handleIndexChange = (index: number)=> {
        console.log(index);
        setCurrentIndex(index);
    }
    
    useEffect(() => {
        let title;
        switch (currentIndex) {
            case 0:
                title = {
                    title: "Welcome to Omowo", 
                    description: "We're here to help you save, and make long term investments for your little ones."
                }
                setCurrentTitle(title);
                break;
            case 1:
                title = {
                    title: "Learn how to invest better", 
                    description: "By talking with our financial experts, you learn on wise investing, and the best financial steps to take for your kids."
                }
                setCurrentTitle(title);
                break;
            case 2:
                title = {
                    title: "Do it with family & friend!", 
                    description: "You don't have to do it alone! Invite your loved ones to join you in making these savings and investments."
                }
                setCurrentTitle(title);
                break;
            case 3:
                title = {
                    title: "Get discounts on debits", 
                    description: "Get cashbacks on all purchases you make when you pay with the Omowo debit card."
                }
                setCurrentTitle(title);
                break;
            case 4:
                title = {
                    title: "Get started now", 
                    description: "Join Omowo now and start building your kids future."
                }
                setCurrentTitle(title);
                break;
            default:
                break;
        }
    }, [currentIndex])

    const nav = (route: string)=> {
        navigation.navigate(route);
    }

    return (
        <Container>
            <View style={{flex: 6}}>
                <Swiper showsButtons={false} 
                showsPagination={false} loop={false} onIndexChanged={handleIndexChange}>
                    <View style={styles.slide}>
                        <Image source={require('../../../../assets/img/slide1.jpg')} style={styles.slideImg} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../../../assets/img/slide2.jpg')} style={styles.slideImg} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../../../assets/img/slide3.jpg')} style={styles.slideImg} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../../../assets/img/slide4.jpg')} style={styles.slideImg} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../../../assets/img/slide5.jpg')} style={styles.slideImg} />
                    </View>
                </Swiper>
            </View>
            <View style={{flex: 7}}>
                <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: scale(10), paddingHorizontal: scale(5)}}>
                    {indicators.map((val: any, index: number)=> (
                        <View key={index} style={{flex: 1, height: scale(3), marginHorizontal: scale(5), borderRadius: scale(5), 
                            backgroundColor: currentIndex === val ? theme.primary.main : theme.neutral[300]}} />
                    ))}
                </View>
                <View style={{flex: 11, paddingHorizontal: scale(10)}}>
                    <SemiBoldText title={currentTitle.title} size={24} color={theme.neutral[900]} lines={5} />
                    <View>
                        <RegularText title={currentTitle.description} 
                        lines={5} size={12} color={theme.neutral[800]} />
                    </View>
                    <View style={{marginTop: "auto", paddingVertical: scale(30)}}>
                        <View>
                            <Button title="Create account" color={theme.primary.main} onPress={()=> nav("Register")} />
                        </View>
                        <View style={{marginTop: scale(10)}}>
                            <Button outline title="Login" color={theme.primary.main} textColor={theme.primary.main} onPress={()=> nav("Login")} />
                        </View>
                    </View>
                </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideImg: {
        resizeMode: "stretch",
        // flex: 1,
        width: "100%",
        height: "100%"
    }
})

export default Onboarding
