import React, { useState } from "react";
import { Text, View } from "react-native-web";
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/main';

  export default function Consulta({navigation}) {
  
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState (null)

    const cadastrar = () => {
      navigation.navigate('Cadastro') 
    }
  
    return (
      <View style={[styles.container, specificStyle.specificContainer]}>
        <Text h2>LOOKING FOR EPI</Text>
        <Input 
        placeholder='Login'
        leftIcon={{ type: 'font-awesome', name: 'envelope'}}
        onChangeText={value => setEmail(value)}
        keyboardType='email-address'
        />
  
        <Input 
        placeholder='Password'
        leftIcon={{ type: 'font-awesome', name: 'lock'}}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
        />
  
        <Button 
        icon={
          <Icon 
            name='check'
            size={15}
            color='white'
          />
        }
          title='Entrar'
          buttonStyle={specificStyle.button}
          onPress={() => entrar()}
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
      backgroundImage: '../imagens/fundo.jpg',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      widht: '100%',
      marginTop: 10
    }
  });
  