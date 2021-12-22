import React from 'react';
import { View,StyleSheet } from 'react-native';

function Card(title,subTitle, image) {
    return (
        <View style={styles.card}>
            <image style={styles.image} source={image} />
            <View style = {styles.detailsContainer}>
                <text style={styles.title}> {title} </text>
                <text style={style.subTitle}> {subTitle} </text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
        overflow: "hidden",
    },
    image:{
        width:"100%",
        height: 200,
    },

    detailsContainer:{
        padding: 20,
    },

    title: {
        marginBottom: 7,
    },
    subTitle: {
        color: '#4ecdc4',
        fontWeight: "bold",

    }
    
})

export default Card;

