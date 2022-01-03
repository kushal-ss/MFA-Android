import React from "react";
import AppButton from "./app/components/AppButton";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CardScreen from "./app/screens/CardScreen";
import GenerateOtpScreen from "./app/screens/GenerateOtpScreen"
import InputOtpScreen from "./app/screens/InputOtpScreen";
import OtpGenerate from "./app/screens/OtpGenerate";
import {View, Button, Text} from 'react-native';
// import OTP from "otp-client"

export default function App(){
//   const secret = "TPQDAHVBZ5NBO5LFEQKC7V7UPATSSMFY"
// const options = {
//   algorithm: "sha256",
//   digits: 6,
//   period: 20
// }
 
// const otp = new OTP(secret, options);
// const token = otp.getToken();
//   console.log("token")
  // return<GenerateOtpScreen/>
  return<OtpGenerate/>
  // return<InputOtpScreen/>
  // return<WelcomeScreen/>;
  // return<CardScreen/>
  // return<CardScreen/>
  // return <ViewImageScreen/>;
}