import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { BoldText, MediumText } from '../Typography/Typography';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from '../Buttons/Button';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import CONSTANTS from '../../utils/constants';
import scale from '../../utils/scale';

interface keyBoardProps {
    /** triggered on button press */
    onKeyPress: (value: string) => void,
    buttonTitle?: string,
    onComplete?: ()=> void,
    onBackSpace?: ()=> void,
    /** event triggered when keyboard becomes visible */
    onPresent?: ()=> void,
    /** disable complete button */
    disableComplete?: boolean,
}

const CustomKeyboard : React.FC<keyBoardProps> = ({onKeyPress, buttonTitle, onBackSpace, onComplete, onPresent, disableComplete}) => {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const {DEVICE_HEIGHT} = CONSTANTS;
    // const actionSheetRef: any = useRef<ActionSheetRef>(); 

    useEffect(() => {
        // actionSheetRef.current.show();
        onPresent ? onPresent() : null
    }, [])
    // const clearPin = ()=> {
    //     let newValue = pin;
    //     newValue = newValue.slice(0, -1);
    //     setPin(newValue);
    //     console.log(newValue);
    //     console.log(pin);
    // }

    return (
        // <ActionSheet animated={false} ref={actionSheetRef} backgroundInteractionEnabled closable={false} onOpen={onPresent} containerStyle={{backgroundColor: theme.primary[600], borderTopEndRadius: 0, borderTopStartRadius: 0}}>
            <View style={{height: DEVICE_HEIGHT / 2, backgroundColor: theme.primary[600], paddingVertical: scale(20), paddingHorizontal: scale(10)}}>
                <View style={{flexDirection: 'row', width: '100%', flex: 2}}>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("1")} style={{borderRadius: 5}}>
                            <MediumText size={32} title="1" color={theme.light.main} />
                        </Pressable>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("2")} style={{borderRadius: 5}}>
                            <MediumText size={32} title="2" color={theme.light.main} />
                        </Pressable>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("3")} style={{borderRadius: 5}}>
                            <MediumText size={32} title="3" color={theme.light.main} />
                        </Pressable>
                    </View>
                </View>
                <View style={{flexDirection: 'row', width: '100%', flex: 2}}>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("4")} style={{borderRadius: 5}}>
                            <MediumText size={32} title="4" color={theme.light.main} />
                        </Pressable>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("5")} style={{borderRadius: 5}}>
                            <MediumText size={32} title="5" color={theme.light.main} />
                        </Pressable>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("6")} style={{borderRadius: 5}}>
                            <MediumText size={32} title="6" color={theme.light.main} />
                        </Pressable>
                    </View>
                </View>
                <View style={{flexDirection: 'row', width: '100%', flex: 2}}>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("7")} style={{borderRadius: 5}}>
                            <MediumText size={32} title="7" color={theme.light.main} />
                        </Pressable>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("8")} style={{borderRadius: 5}}>
                            <MediumText size={32} title="8" color={theme.light.main} />
                        </Pressable>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("9")} style={{borderRadius: 5}}>
                            <MediumText size={32} title="9" color={theme.light.main} />
                        </Pressable>
                    </View>
                </View>
                <View style={{flexDirection: 'row', width: '100%', flex: 2}}>
                    <View style={{flex: 4, alignItems: 'center', paddingTop: 20}}>
                        {/* <Pressable onPress={()=> logout()}>
                            <PrimaryNote title="Logout" color={colors.danger} />
                        </Pressable> */}
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={()=> onKeyPress("0")} style={{borderRadius: 5}}>
                            <MediumText size={32} title="0" color={theme.light.main} />
                        </Pressable>
                    </View>
                    <View style={{flex: 4, alignItems: 'center'}}>
                        <Pressable onPress={onBackSpace}>
                            <Ionicons name="close-outline" color={theme.light.main} size={50} style={{marginLeft: 10}} />
                        </Pressable>
                    </View>
                </View>
                <View>
                    <Button color={theme.success[500]} title={buttonTitle ?? ""} textColor={theme.text.main} onPress={onComplete} disabled={disableComplete ?? false} />
                </View>
            </View>
        // </ActionSheet>
    )
}

export default CustomKeyboard
