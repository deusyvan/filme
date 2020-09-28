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
                    <Card.Title title="Card Title" subtitle="Card Subtitle" />
                    <Card.Content>
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>
            ))}
        </View>
    </>
  )
}