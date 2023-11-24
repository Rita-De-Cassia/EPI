import { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { Button, CheckBox, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/main';


export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [isSelected, setSelected] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorNome, setErrorNome] = useState('');
  const [errorCpf, setErrorCpf] = useState('');
  const [errorTelefone, setErrorTelefone] = useState('');

  const validar = () => {
    setErrorEmail('');
    setErrorNome('');
    setErrorCpf('');
    setErrorTelefone('');

    let valido = true;
    if (!email) {
      setErrorEmail('Preencha seu E-mail corretamente');
      valido = false;
    }
    if (!nome) {
      setErrorNome('Preencha seu Nome');
      valido = false;
    }
    if (!cpf) {
      setErrorCpf('Preencha seu CPF corretamente');
      valido = false;
    }
    if (!telefone) {
      setErrorTelefone('Preencha seu Telefone');
      valido = false;
    }
    return valido;
  };

  const salvar = () => {
    if (validar()) {
      console.log('Cadastro Realizado com Sucesso');
      navigation.navigate('Login');
    }
  };

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h3>Cadastre-se</Text>
      <Input 
      placeholder='E-mail'
      leftIcon={{ type: 'font-awesome', name: 'envelope'}}
      onChangeText={value => 
        setEmail(value)
      }
      keyboardType='email-address'
      returnKeyType='done'
      errorMessage={errorEmail}
      />
      <Input 
      placeholder='Nome Completo'
      leftIcon={{ type: 'font-awesome', name: 'user'}}
      onChangeText={value => 
        setNome(value)
      }
      returnKeyType='done'
      errorMessage={errorNome}
      />
      <Input 
      placeholder='Cpf'
      leftIcon={{ type: 'font-awesome', name: 'id-card'}}
      onChangeText={value => 
        setCpf(value)
      }
      keyboardType='number-pad'
      returnKeyType='done'
      errorMessage={errorCpf}
      />
      <Input 
      placeholder='Telefone'
      leftIcon={{ type: 'font-awesome', name: 'phone'}}
      onChangeText={value => 
        setTelefone(value)
      }
      keyboardType='phone-pad'
      returnKeyType='done'
      errorMessage={errorTelefone}
      />
      <Input 
      placeholder='Senha'
      leftIcon={{ type: 'font-awesome', name: 'lock'}}
      onChangeText={value => setSenha(value)}
      returnKeyType='done'
      />
       
      <CheckBox
        title='Eu aceito os termos de uso'
        checkedIcon='check'
        uncheckedIcon='square-o'
        checkedColor='purple'
        uncheckedColor='red'
        checked={isSelected}
        onPress={() => setSelected(!isSelected)}
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