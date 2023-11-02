import { useState } from "react";
import { StyleSheet, View, TextInput, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input, Text} from 'react-native-elements';
import Adicionar from './adicionar'
import Inicio from './inicio';

function Principal() {

  const [ca, setca] = useState (null)
  
  const adicionar = () => {
    navigation.navigate('Adicionar') 
  }
  const inicio = () => {
    navigation.navigate('Inicio') 
  }
  const Sair = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Inicio'}]
    })
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./fundo.jpg')} style={styles.background}>
        <Text style={styles.title}>LOOKING FOR EPI</Text>
        <Input 
          placeholder='Número do CA'
          leftIcon={{ type: 'font-awesome', name: 'lock'}}
          onChangeText={value => setca(value)}
        />
        <View style={[styles.buttons, { justifyContent: 'space-between' }]}>
          <Button 
          title="REGISTRAR NOVO EPI" onPress={() => adicionar()} buttonStyle={[styles.button1, styles.login]}/>
        </View>
        </ImageBackground>
      <View style={[styles.buttons, { justifyContent: 'space-between' }]}>
          <Button title="SAIR" onPress={() => Sair()} buttonStyle={[styles.button2, styles.subscribe]}/>
    </View>
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
    flex: 1,
    resizeMode: "cover",
    width: '100%',
    height: '40%',
    justifyContent: "center",
    alignItems: "center",
  },
title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(130, 0, 16, 1)',
    backgroundColor: 'rgba(0, 62, 220, 0.5)',
    width: '100%',
    height: '8%',
    textAlign: 'center',
    marginTop: 95,
    marginBottom: 10,
  },
  buttons:{
  },
  button1:{
    borderRadius :10,
    marginHorizontal :10,
    marginVertical :5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 35,
    marginBottom: 10,
  },
  button2:{
    borderRadius :10,
    marginHorizontal :10,
    marginVertical :5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
});

export default Principal;
