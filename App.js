import React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import styles from './style/main'
import Login from './telas/telalogin';
import Consulta from './telas/telaconsulta';
import Informacao from './telas/telainfo';
import Usuario from './telas/telacadastro';
import Principal from './telas/telaprincipal';
import Cadastro from './telas/telacadastro';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Consulta" component={Consulta} />
      <Stack.Screen name="Informações" component={Informacao} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}