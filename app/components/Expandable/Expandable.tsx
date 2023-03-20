import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import scale from '../../utils/scale';
import { RegularText } from '../Typography/Typography';

interface Props {
    /** expanded state to display more information */
    open?: boolean;
    /** main display title */
    title?: string;
    /** extra description information to display in expanded state */
    description: string;
    /** text color of title */
    textColor?: string;
    /** text color of description */
    descriptionColor?: string;
    /** bottom border color */
    borderColor?: string;
}

const Expandable: React.FC<Props> = ({open, title, description, descriptionColor, textColor, borderColor}) => {
    const [isOpen, setIsOpen] = useState(open ?? false);

    const handlePress = ()=> {
        setIsOpen(!isOpen);
    }
    return (
        <View style={[styles.main, {borderBottomColor: borderColor ?? 'lightgrey'}]}>
            <Pressable android_ripple={{color: 'lightgrey'}} style={styles.btn} onPress={handlePress}>
                <RegularText size={20} title={title ?? ''} color={textColor ?? 'black'} />
                <Image source={require('../../../assets/icons/chevron-down.png')} style={styles.icon} />
            </Pressable>
            {isOpen ? (
                <View style={{marginTop: scale(10), marginBottom: scale(5)}}>
                    <RegularText size={16} title={description} color={descriptionColor ?? 'black'} />
                </View>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        // paddingVertical: scale(10),
        borderBottomWidth: 1,
    },
    icon: {
        height: 10,
        width: 20, 
        resizeMode: 'contain',
        marginLeft: 5,
    },
    btn: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end', 
        paddingVertical: scale(10),
    }
})

export default Expandable
