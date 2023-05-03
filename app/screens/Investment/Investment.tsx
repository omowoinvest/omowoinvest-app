import React, { FC } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import Container from '../../components/Container/Container'
import { RegularText, SemiBoldText } from '../../components/Typography/Typography'
import { RootState } from '../../store/store'
import scale from '../../utils/scale'
import { Screen } from '../../utils/types'
import InvestmentItem from './InvestmentItem'

const Investment: FC<Screen> = ({navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const investments = [
        {
            title: "Air Element",
            description: "Companies that are at the forefront of affordable and clean energy.",
            icon: require('../../../assets/img/air.png'),
            risk: "low"
        },
        {
            title: "Fire Element",
            description: "Companies leading the provision of innovation and infrastructure.",
            icon: require('../../../assets/img/fire.png'),
            risk: "high"
        },
        {
            title: "Water Element",
            description: "Companies that are at the forefront of healthcare and wellness.",
            icon: require('../../../assets/img/water.png'),
            risk: "low"
        },
        {
            title: "Earth Element",
            description: "Companies that are leading the way in agriculture.",
            icon: require('../../../assets/img/earth.png'),
            risk: "medium"
        },
    ]

    // item reps investment obj
    const handlePress = (item: any)=> {
        navigation.navigate("ViewInvestment", {investment: item})
    }

    return (
        <Container style={{paddingTop: scale(5), paddingHorizontal: scale(16)}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SemiBoldText title="Investment Plans" color={theme.neutral[900]} size={24} />
                <View style={{marginTop: scale(12)}}>
                    <RegularText title="The investment plans are categorised into what we call Elements. The following are the various elements available that you can invest in:" size={14} lines={6} color={theme.neutral[800]} />
                </View>
                <View style={{marginTop: scale(18)}}>
                    {investments.map((item, index)=> (
                        <InvestmentItem key={index} title={item.title} imgSrc={item.icon} 
                            description={item.description}
                            onPress={()=> handlePress(item)}
                        />
                    ))}
                </View>
            </ScrollView>
        </Container>
    )
}

export default Investment
