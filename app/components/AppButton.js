import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

function AppButton({title, onPress, color}) {
    return (
        <TouchableOpacity style={styles.button } onPress={onPress}>
            <Text style ={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF0000',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
        
    },
    text: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
    
})

export default AppButton;