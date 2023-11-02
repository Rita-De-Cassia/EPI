import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { Button, Input} from 'react-native-elements';

function Consulta() {

  const Principal = () => {
    navigation.navigate('Principal') 
  }

  return (
    <ImageBackground source={require('./fundo.jpg')} style={styles.background} imageStyle={{ opacity: 0.3 }}>
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Text style={styles.searchText}>LOOKING FOR EPI</Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity>
          <Image source={require('./bota.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.title}>Nome do EPI</Text>
        <TextInput 
          style={styles.input}
          onChangeText={value => setca(value)}
        />
        <Text style={styles.title}>Numero CA do EPI</Text>
        <TextInput 
          style={styles.input}
          onChangeText={value => setca(value)}
        />
        <Text style={styles.title}>Data de Validade do EPI</Text>
        <TextInput 
          style={styles.input}
          onChangeText={value => setca(value)}
        />
        <Text style={styles.title}>Tipo de EPI</Text>
        <TextInput 
          style={styles.input}
          onChangeText={value => setca(value)}
        />
      </View>
      <Button title="Voltar" buttonStyle={[styles.button, styles.buttonText]} onPress={() => Principal()}/>
    </View>
    </ImageBackground>
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
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  searchBar: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(0, 62, 220, 0.56)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(130, 0, 16, 1)'
  },
  icons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  infoBox: {
    width: '80%',
    height: '50%',
    backgroundColor: 'rgba(0, 62, 220, 0.2)',
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  input: {
    width: '90%',
    height: 30,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  title:{
    marginBottom: 10,
    fontWeight: 'bold',
  },
   button: {
    width: '80%',
    height: 50,
    backgroundColor:'rgba(0, 62, 220, 0.56)',
    borderRadius :10,
    marginHorizontal :10,
    marginVertical :5,
    alignItems:'center',
    justifyContent:'center'
   },
   buttonText:{
     color:'#FFFFFF',
     fontSize :18
   }
});

export default Consulta;
