import React from 'react';
import { View, Text, StyleSheet, ViewStyle, Pressable } from 'react-native';

interface Props {
    parentStyle?: ViewStyle, /** additional styling for card parent */
    contentStyle?: ViewStyle, /** additional styling for card content */
    children: any;
    onPress?: ()=> void;
}

const Card = (props: Props) => {
    return (
        <Pressable style={[styles.card, props.parentStyle]} onPress={props.onPress}>
            <View style={[styles.cardContent, props.contentStyle]}>
                {props.children}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        margin: 5,
        flex: 1,
        // height: 'auto'
    },
    cardContent: {
        margin: 10
    }
})
export default Card
