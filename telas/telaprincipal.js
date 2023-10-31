import React, { useState } from "react";
import { Text, View } from "react-native-web";

const cadastrar = () => {
  navigation.navigate('Cadastro') 
}

export default function Principal() {
    return (
      <View style={[styles.container, specificStyle.specificContainer]}>
        <Text h1>LOOKING FOR EPI</Text>

      <Button 
      icon={
        <Icon 
          name='plus'
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
      backgroundColor: 'rgba(77, 148, 255, 0.3)',
      TextColor: 'rgba(130, 0, 16, 1)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      widht: '100%',
      marginTop: 10
    }
  });