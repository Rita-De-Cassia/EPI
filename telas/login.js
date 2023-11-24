import { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/main';

import principal from "./principal";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      console.error('Email e senha são obrigatórios');
      return;
    }

    try {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Principal' }],
      });
    } catch (error) {
      console.error('Erro na navegação', error);
    }
  };

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h2>LOOKING FOR EPI</Text>
      <Input 
        placeholder='Login'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={setEmail}
        keyboardType='email-address'
      />

      <Input 
        placeholder='Password'
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Button 
        icon={<Icon name='check' size={15} color='white' />}
        title='Entrar'
        buttonStyle={specificStyle.button}
        onPress={handleLogin}
      />
    </View>
  );
}


const specificStyle = StyleSheet.create({
  specificContainer: {
    flex: 1,
    backgroundColor: 'rgba(77, 148, 255, 0.54)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    widht: '100%',
    marginTop: 10
  }
});
