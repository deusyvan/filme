import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import apiFilmes from '../../services/apiFilmes';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

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
                <Card key={item.id}>
                    <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path }} />
                    <Card.Content>
                        <Title>{item.title}</Title>
                        <Paragraph>{item.overview}</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button>Ver mais</Button>
                    </Card.Actions>
                </Card>
            ))}
        </View>
    </>
  )
}