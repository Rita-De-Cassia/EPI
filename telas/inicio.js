import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

function Inicio({ navigation }) {

  const handleLogin = () => {
    try {
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro na navegação para Login', error);
    }
  };

  const handleCadastro = () => {
    try {
      navigation.navigate('Cadastro');
    } catch (error) {
      console.error('Erro na navegação para Cadastro', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./fundo.jpg')} style={styles.background} opacity={0.02}>
        <Text style={styles.title}>LOOKING FOR EPI</Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={[styles.button, styles.login]} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.subscribe]} onPress={handleCadastro}>
            <Text style={styles.buttonText}>CADASTRE-SE</Text>
          </TouchableOpacity>
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
