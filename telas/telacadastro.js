import React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, CheckBox, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/main';


export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState (null)
  const [cpf, setCpf] = useState (null)
  const [telefone, setTelefone] = useState (null)
  const [senha, setSenha] = useState (null)

  const salvar = () => {
    console.log ('Cadastro Realizado com Sucesso')
  }

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h3>Cadastre-se</Text>
      <Input 
      placeholder='E-mail'
      leftIcon={{ type: 'font-awesome', name: 'envelope'}}
      onChangeText={value => setEmail(value)}
      keyboardType='email-address'
      returnKeyType='done'
      />
      <Input 
      placeholder='Nome Completo'
      leftIcon={{ type: 'font-awesome', name: 'user'}}
      onChangeText={value => setNome(value)}
      returnKeyType='done'
      />
      <Input 
      placeholder='Cpf'
      leftIcon={{ type: 'font-awesome', name: 'id-card'}}
      onChangeText={value => setCpf(value)}
      keyboardType='number-pad'
      returnKeyType='done'
      />
      <Input 
      placeholder='Telefone'
      leftIcon={{ type: 'font-awesome', name: 'phone'}}
      onChangeText={value => setTelefone(value)}
      keyboardType='phone-pad'
      returnKeyType='done'
      />
      <Input 
      placeholder='Senha'
      leftIcon={{ type: 'font-awesome', name: 'lock'}}
      onChangeText={value => setSenha(value)}
      returnKeyType='done'
      />
       
      <CheckBox
        title='Eu aceito os termos de uso'
        checkedIcon=''
      />

      <Button 
      icon={
        <Icon 
          name='user'
          size={15}
          color='white'
        />
      }
        title='Salvar'
        buttonStyle={specificStyle.button}
        onPress={() => salvar()}
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