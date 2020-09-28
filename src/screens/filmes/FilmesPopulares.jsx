import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import apiFilmes from '../../services/apiFilmes';

export default () => {

//Criando variavel filmes usando os estados
const [filmes, setFilmes] = useState([])

//Ao carregar a página ele chama useEffect
useEffect(()=>{

    //Chamando a apiFilmes pegando o filmes populares
    apiFilmes.get('movie/popular').then(results =>{
        setFilmes(results.data.results)
    })
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