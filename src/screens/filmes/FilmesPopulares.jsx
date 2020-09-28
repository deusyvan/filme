import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import apiFilmes from '../../services/apiFilmes';

export default () => {

const filmes = [
    {id:1, title:'Rambo'},
    {id:2, title:'Efeito Borboleto'},
    {id:3, title:'A Origem'},
    {id:4, title:'Matrix'},
    {id:5, title:'Titanic'},
    {id:6, title:'E o Vento Levou'},
]

    useEffect(()=>{

        const results = apiFilmes.get('movie/popular')

    }, [])


  return (
    <>
        <View>
            {filmes.map(item => (
            <Text key={item.id}>
                {item.title}
            </Text>
            ))}
        </View>
    </>
  )
}