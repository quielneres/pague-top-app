import React, {useState, useEffect} from 'react';

import { ScrollView} from 'react-native';
import {Container, Button, Content, Card, CardItem, Footer, Text} from 'native-base';


import api from "../../services/api";

// const ls = require('react-native-local-storage')

const Cards = ({navigation}) => {

    const [cards, setCards] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        api.get('list-credit-card/1')
            .then((res) => {
                setCards(res.data.data)
            })
    }, []);


    const renderCard = (card) => (
        <CardItem style={{justifyContent: 'center', flexDirection: 'column'}}>
            <Card style={{
                backgroundColor: '#2C3740',
                width: 350,
                height: 180,
                margin: 40,
                borderRadius: 10,
                padding: 20
            }}>
                <Text style={{ color: 'white', fontSize: 25}}>{card.dig_start} **** ****  {card.dig_end}</Text>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold'}}>12/03</Text>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 40}}>CVC 123</Text>
            </Card>
            <Card style={{
                backgroundColor: 'red',
                width: 350,
                height: 60,
                margin: 40,
                marginTop: 40,
                borderRadius: 10,
                padding: 20
            }}>
                <Text>124-5678-9098-7654</Text>

            </Card>
        </CardItem>
    );


    return (
        <Container>
            <Content>
                <Card style={{flexDirection: 'row'}}>
                    <ScrollView horizontal={true}>
                        {cards.map((c) => renderCard(c))}
                    </ScrollView>
                </Card>
                <Card>

                </Card>
            </Content>
            <Footer style={{height: 100}}>
                <CardItem>
                    <Button block style={{width: '100%', height: 60, borderRadius: 7}}
                            onPress={() => navigation.navigate('AddCard')}>
                        <Text>Adicionar Cartao</Text>
                    </Button>
                </CardItem>
            </Footer>
        </Container>
    );
};

export default Cards;


