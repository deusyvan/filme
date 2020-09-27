import React from 'react';
import { View, Text } from 'react-native';

export default () => {

const filmes = [
    {id:1, title:'Rambo'},
    {id:2, title:'Efeito Borboleto'},
    {id:3, title:'A Origem'},
    {id:4, title:'Matrix'},
    {id:5, title:'Titanic'},
]

  return (
    <>
        <View>
            {filmes.map(item => (
            <Text key={item.id}>{item.title}</Text>
            ))}
        </View>
    </>
  )
}