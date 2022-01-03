import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';
import OTP from 'otp-client';

const App = () => {
        const [code, setToken] = useState('');
        const generateOTP = (length) => {
                const secret = "OM4EU4DLNUVGCTROG4QUST3MM52SCRLPGJYHCPRQN45UCYJOKAQQ"
                const options = {
                        algorithm: "SHA1",
                        digits: 6,
                        period: 30
                };
                const otp = new OTP(secret, options);
                const token = otp.getToken();
                setToken(token);
                return token; 
        }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        onPress={() => generateOTP(6)}
        title="Generate OTP"
        color="#841584"
      />
        <Text>{code}</Text>
    </View>
  );
};

export default App;