import React, { FC } from 'react'
import { View, Text, Image, ImageSourcePropType, StyleSheet, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import Badge from '../../components/Badge/Badge'
import Button from '../../components/Buttons/Button'
import Container from '../../components/Container/Container'
import { BlockText, MediumText, RegularText, SemiBoldText } from '../../components/Typography/Typography'
import { RootState } from '../../store/store'
import scale from '../../utils/scale'
import { Screen } from '../../utils/types'

const ViewInvestmentPlan: FC<Screen> = ({route, navigation}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const {title, description, risk, icon} = route?.params?.investment;
    return (
        <Container style={{paddingTop: scale(5), paddingHorizontal: scale(16)}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={icon as ImageSourcePropType} style={{height: scale(246), width: "100%"}} />
                <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: scale(25)}}>
                    <SemiBoldText title={title} size={18} color={theme.neutral[900]} />
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <SemiBoldText title="Risk level: " size={12} color={theme.neutral[600]} />
                        <Badge title={risk} 
                            color={risk === "low" ? theme.success[400] : risk === "high" ? theme.danger.main : theme.neutral.main }
                        />
                    </View>
                </View>
                <View style={{marginTop: scale(16)}}>
                    <RegularText size={16} 
                        title="We are in good support of companies that are ensuring that our daily sources of  energy are promoting a healthy earth for every life. Making this investment shows just how much you value the world you want your child to  live in a better world."
                        color={theme.neutral[800]}
                        // lines={10}
                    />
                </View>
                <View style={{marginTop: scale(32)}}>
                    <View style={{marginBottom: scale(8)}}>
                        <SemiBoldText title={"The Importance"} size={16} color={theme.neutral[900]} />
                    </View>
                    <BlockText color={theme.neutral[800]} size={16}>
                        <MediumText title="Environment Sustenance: " size={16} color={theme.neutral[800]} />
                        With more of affordable and clean energy available for many, the more the environments we find ourselves in will be sustained.
                    </BlockText>
                </View>
                <View style={{marginTop: scale(8)}}>
                    <BlockText color={theme.neutral[800]} size={16}>
                        <MediumText title="Pattern Shift: " size={16} color={theme.neutral[800]} />
                        Many companies will be driving towards the decrease in production of materials that are harmful to the environment and will begin looking out for clean sources of energy.  
                    </BlockText>
                </View>
                <View style={{marginTop: scale(8)}}>
                    <RegularText title="These element invests in companies that are working on solar equipments, wind equipments, renewables and much more." size={16} color={theme.neutral[800]} />
                </View>
                <View style={{marginTop: scale(27), marginBottom: scale(85)}}>
                    <SemiBoldText title={"Companies Included:"} size={16} color={theme.neutral[900]} />
                    <RegularText title="10 comapanies are inside this element and this might change from time to time." size={16} 
                    color={theme.neutral[800]} />
                </View>
            </ScrollView>
            <View style={[styles.footer, {borderTopColor: theme.neutral[200], backgroundColor: theme.light}]}>
                <View style={{flex: 6}}>
                    <SemiBoldText title="15%" size={16} color={theme.primary.main} />
                    <MediumText title="Returns per annum" color={theme.neutral[600]} size={12} />
                </View>
                <View style={{flex: 6}}>
                    <Button title="Invest" color={theme.primary.main} />
                </View>
            </View>
        </Container>
    )
}

const  styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        paddingHorizontal: scale(16),
        height: scale(82),
        borderTopWidth: scale(1),
        width: Dimensions.get("screen").width,
        alignItems: "center",
    }
})

export default ViewInvestmentPlan
