import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, FlatList} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { RegularText, MediumText, BoldText} from '../Typography/Typography';
// import DatePicker from 'react-native-date-picker';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
// import globalStyles, {colors, screenHeight} from '../../Styles/Styles';
import { Button } from '../Buttons/Button';
// import { observer, inject } from "mobx-react";
import Input from '../Inputs/TextInput';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { FlatList } from 'react-native-gesture-handler';
import CONSTANTS from '../../utils/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface Props {
    store?: any;
    list?: Array<any>;
    /** either date or list */
    mode: 'date' | 'list';
    // action sheet ref to used to open action sheet on parent component
    setRef: (ref: any)=> void;
    /**call back action executed when done button is clicked */
    onDateChange?: (event: DateTimePickerEvent, date?: Date)=> any;
    close: ()=> void;
    date?: Date | undefined,
    /**title of popup */
    title: string,
    /**callback when an item on list is clicked */
    onSelectItem?: (obj: any)=> any;
    /** full height of popup no mtter length of content*/
    fullHeight?: boolean;
    /**key to display list item name */
    listTitleKey?: string;
    /** display a search bar to enable search through list of items */
    search?: boolean;
    /**whether to display content horizontally */
    grid?: boolean;
    /** loading indicator */
    // loading?: boolean;
    /** optimize sheet presentation */
    optimize?: boolean;
}

const {DEVICE_HEIGHT} = CONSTANTS;
const SelectSheet = (props: Props)=> {
    const {theme} = useSelector((state: RootState) => state.appSetting);
    const [list, setList]: any = useState([]);

    useEffect(() => {
        setList(props.list);
    }, [props.list])

    const search = (val: string)=> {
        const key = props.listTitleKey ? props.listTitleKey : null;
        if (val) {
            let subList: any = list;
            subList = subList.filter((item: any) => key ? item[key].toLowerCase().includes(val.toLowerCase()) : item.toLowerCase().includes(val.toLowerCase()))
            setList(subList);
        }
        else {
            setList(props.list)
        }
    
    }

    const [showContent, toggleContent] = useState(false);
    const toggleContentDisplay = ()=> {
        setTimeout(() => {
            toggleContent(!showContent);
        }, 100);
    }

    // render() {
    return (
        <ActionSheet ref={ref => {props.setRef(ref)}} gestureEnabled 
        onClose={
            ()=>{
                props.close(); 
                toggleContent(false)
            }
        } 
        onOpen = {toggleContentDisplay}>
            <View style = {{height: props.fullHeight ? DEVICE_HEIGHT : 'auto'}}>
            <BoldText size={32} title={props.title} />
            {props.mode === 'date' ? (
                <>
                    <View style={styles.datePicker}>
                        <DateTimePicker style={{backgroundColor: 'white'}}
                            value={new Date()}
                            // date={props.date}
                            onChange={props.onDateChange}
                            mode="date"
                            minimumDate={new Date()}
                        />
                    </View>
                    <View style={{margin: 10}}>
                        <Button title="Done" onPress={ props.close } />
                    </View>
                </>
            ) : (
                <View style={{paddingHorizontal: 10}}>
                    {props.search ? (
                        <Input placeholder="search" onChangeText = {search} />
                    ) : (null)}
                {props.optimize ? (
                <>
                {showContent ? (
                    <ScrollView nestedScrollEnabled contentContainerStyle={{flexWrap: props.grid ? 'wrap' : 'nowrap', flexDirection: props.grid ? 'row' : 'column'}}>
                        {list?.map((item: any, index: number)=> (
                            <TouchableOpacity key={index} onPress = { ()=> props.onSelectItem ? props.onSelectItem(item) : null } 
                            style={[ props.grid ? styles.gridStyle : styles.listStyle, {borderBottomColor: theme.light[400]}]}>
                                <RegularText size={16} title={props.listTitleKey ? item[props.listTitleKey] : item} color = {theme.dark} textAlign="left"  />
                            </TouchableOpacity>
                        ))}
                        {list?.length === 0 ? (
                            <RegularText size={16} title="No data" />
                        ) : (null)}
                    </ScrollView> 
                ) : (<RegularText size={16} title="Please wait..." />)}
                </>
                ) : (
                    <ScrollView nestedScrollEnabled contentContainerStyle={{flexWrap: props.grid ? 'wrap' : 'nowrap', flexDirection: props.grid ? 'row' : 'column'}}>
                        {list?.map((item: any, index: number)=> (
                            <TouchableOpacity key={index} onPress = { ()=> props.onSelectItem ? props.onSelectItem(item) : null } 
                            style={[ props.grid ? styles.gridStyle : styles.listStyle, {borderBottomColor: theme.light[400]}]}>
                                <MediumText size={16} title={props.listTitleKey ? item[props.listTitleKey] : item} color = {theme.dark} textAlign="left"  />
                            </TouchableOpacity>
                        ))}
                        {list?.length === 0 ? (
                            <RegularText size={16} title="No data" />
                        ) : (null)}
                    </ScrollView> 
                )}   
                </View>
            )}
            </View>
        </ActionSheet>
    )
    // }
}

const styles = StyleSheet.create({
    datePicker: {
        backgroundColor: 'white',
        alignItems: 'center'
    },
    listStyle : {
        padding: 10,
        borderBottomWidth: 1,
        // borderBottomColor: theme.light.main,
    },
    gridStyle: {
        padding: 10,
        borderBottomWidth: 1,
        // borderBottomColor: theme.light[400],
        width: '20%',
    }
})

export default SelectSheet;
