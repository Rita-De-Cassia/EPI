import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Cadastro from './cadastro';
import Login from './login';

function Inicio() {
  const navigation = useNavigation();

  const Login = () => {
    navigation.navigate('Login');
  };

  const Cadastro = () => {
    navigation.navigate('Cadastro') 
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./fundo.jpg')} style={styles.background} opacity={0.02} >
        <Text style={styles.title}>LOOKING FOR EPI</Text>
        <View style={styles.buttons}>
          <Button title="LOGIN" buttonStyle={[styles.button1, styles.login]} onPress={() => Login()}/>
          <Button title="CADASTRE-SE" buttonStyle={[styles.button2, styles.subscribe]} onPress={() => Cadastro()}/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(130, 0, 16, 1)',
    marginBottom: 180,
  },
  buttons:{
    flexDirection:'row'
  },
  button1:{
    borderRadius :10,
    marginHorizontal :10,
    marginVertical :5
  },
  button2:{
    borderRadius :10,
    marginHorizontal :10,
    marginVertical :5
  },
  login:{
      backgroundColor:'rgba(0, 62, 220, 0.8)'
  },
  subscribe:{
      backgroundColor:'rgba(0, 62, 220, 0.8)'
  }
});

export default Inicio;
