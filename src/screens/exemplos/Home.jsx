import React from 'react';
import { View,Text } from 'react-native';
import { Button } from 'react-native-paper';

export default ({navigation}) => {
  return (
    <>
    <View>
      <Text>Página Inicial</Text>
      
      <Text>Bem vindo a Home</Text>
      <Button onPress={()=>navigation.navigate('p1')} >Ir Para a Página 1</Button>
    </View>
    </>
  )
}