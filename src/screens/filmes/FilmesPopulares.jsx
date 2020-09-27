import React from 'react';
import { View, Text } from 'react-native';

export default () => {

const filmes = ['Filme 1', 'Filme 2','Filme 3']

  return (
    <>
        <View>
            <Text>Filmes Populares</Text>
            {filmes.map(item => (
                
            ))}
        </View>
    </>
  )
}