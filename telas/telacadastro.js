import React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/main';


export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState (null)

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Principal'}]
    })
  }

  const cadastrar = () => {
    navigation.navigate('Cadastro') 
  }

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h3>Cadastre-se</Text>
      <Input 
      placeholder='Login'
      leftIcon={{ type: 'font-awesome', name: 'envelope'}}
      onChangeText={value => setEmail(value)}
      keyboardType='email-address'
      />
       
      <Button 
      icon={
        <Icon 
          name='user'
          size={15}
          color='white'
        />
      }
        title='Cadastrar'
        buttonStyle={specificStyle.button}
        onPress={() => cadastrar()}
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