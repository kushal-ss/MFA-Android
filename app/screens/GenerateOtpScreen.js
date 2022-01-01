import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';

const App = () => {
  const [OTP, setOTP] = useState('');
  const generateOTP = (length) => {
    const characters =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const characterCount = characters.length;
    let OTPvalue = '';
    for (let i = 0; i < length; i++) {
      OTPvalue += characters[Math.floor(Math.random() * characterCount)];
    }
    setOTP(OTPvalue);
    return OTPvalue;
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        onPress={() => generateOTP(6)}
        title="Generate OTP"
        color="#841584"
      />
      <Text>{OTP}</Text>
    </View>
  );
};

export default App;