import React from 'react';
import { View,StyleSheet } from 'react-native';
import Card from "../components/Card";

function CardScreen(props){
    return <View style={{
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100
    }}>
        <Card 
        title="QR Code Scanner"
        subTitle="Last Updated:16th December 2018"
        image="../assets/QRcode.png"
        />
        
    </View>
    ;
}

export default CardScreen;
