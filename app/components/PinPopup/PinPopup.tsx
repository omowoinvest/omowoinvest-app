import React from 'react';
import { View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { RegularText} from '../Typography/Typography';
// import globalStyles, {colors} from '../../Styles/Styles';
import { Button } from '../Buttons/Button';
// import { observer, inject } from "mobx-react";
import Input from '../Inputs/TextInput';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface Props {
    // action sheet ref to used to open action sheet on parent component
    setRef: (ref: any)=> void;
    /** callback to close sheet */
    close: ()=> void;
    /** callback to set the value of entered pin */
    setPin: (text: string)=> void;
    /**Callback to confirm transaction */
    confirmTransaction: ()=> void;
}

const PinPopup: React.FC<Props> = (props: any)=> {
    const {theme, alertVisible, alert} = useSelector((state: RootState) => state.appSetting);
    // render() {
    return (
        <ActionSheet ref={ref => {props.setRef(ref)}} gestureEnabled onClose={props.close}>
            <View style={{padding: 15}}>
                <RegularText size={16} title="Enter pin to proceed" color={theme.primary.main} />
                <Input label="Pin" onChangeText = {props.setPin} secure />
                <Button title="Confirm" color={theme.primary.main} onPress = {props.confirmTransaction} textColor={theme.light.main} />
            </View>
        </ActionSheet>
    )
    // }
}

// const styles = StyleSheet.create({
//     datePicker: {
//         backgroundColor: 'white',
//         alignItems: 'center'
//     },
//     listStyle : {
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: colors.mediumFade
//     }
// })

export default PinPopup;
