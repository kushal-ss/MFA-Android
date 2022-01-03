import React from 'react';
import { Image, View } from 'react-native';
import { ImageBackground, StyleSheet, Text} from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
       <ImageBackground
       // blurRadius={5}
       style={styles.background}
      // source = {require('../assets/background.jpg')}
       source={require('../assets/WelcomeScreen.jpg')}
      >
          
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <Text styles={styles.tagline}>Multifactor Authention App</Text>
          </View>
          <View style={styles.buttonsContainer}>
          <AppButton title="Login" />
          <AppButton title="Register"/>
          </View>
       </ImageBackground>
    );
    
}

const styles = StyleSheet.create({
    background: {
        flex:1, // so background will take entire scre
        justifyContent: "flex-end",
        alignItems: "center",

    },
    
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#FFFFFF',
        

    },

    tagline: {
        fontSize: 100,
        fontWeight: "700",
        paddingVertical: 40,
        textTransform: "capitalize",
    
    },

    logo:{
        width: 200,
        height: 200,
    
    },
    logoContainer:{
        position: 'absolute',
        top: 70,
        alignItems: "center"

    },
    buttonsContainer:{
        padding:20,
        width: '100%',

    },

    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',

    },

    image: {
        width: "100%",
        height: "100%",

    },
    
});

export default WelcomeScreen;