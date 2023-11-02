import { useState } from "react";
import { StyleSheet, View } from 'react-native';
import { Button, CheckBox, Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/main';


export default function Adicionar({navigation}) {

  const [Ca, setCa] = useState(null)
  const [Nome, setNome] = useState (null)
  const [Data, setData] = useState (null)
  const [Tipo, setTipo] = useState (null)

  const [isSelected, setSelected] = useState (false)
 

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h3>Cadastre-se</Text>
      <Input 
      placeholder='Nome do EPI'
      onChangeText={value => setNome(value)}
      />
      <Input 
      placeholder='Número CA do EPI'
      onChangeText={value => setCa(value)}
      keyboardType='number-pad'
      />
      <Input 
      placeholder='Data de Validade do EPI'
      onChangeText={value => setData(value)}
      />
      <Input 
      placeholder='Tipo de EPI'
      onChangeText={value => setTipo(value)}
      />

      <CheckBox
        title='Confirmo que todos os dados apresentados acima estão corretos'
        checkedIcon='check'
        uncheckedIcon='square-o'
        checkedColor='purple'
        uncheckedColor='red'
        checked={isSelected}
        onPress={() => setSelected(!isSelected)}
      />

      <Button 
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