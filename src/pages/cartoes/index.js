import React from 'react';

import {StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, View} from 'react-native';
import {Container, Button, Content, Card, CardItem, Footer, Text} from 'native-base';

const Cards = ({navigation}) => {
    return (
        <Container>
            <Content>
                <Card>
                    <CardItem>
                        <Button block style={{width: 70, height: 70, borderRadius: 7}}>
                            <Text>Adicionar Cartao</Text>
                        </Button>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem style={{justifyContent: 'center', flexDirection: 'column'}}>
                        <Card style={{
                            backgroundColor: 'red',
                            width: '90%',
                            height: 180,
                            margin: 40,
                            borderRadius: 10,
                            padding: 20
                        }}>
                            <Text>124-5678-9098-7654</Text>
                            <Text>12/03</Text>
                            <Text>CVC 123</Text>
                        </Card>
                        <Card style={{
                            backgroundColor: 'red',
                            width: '90%',
                            height: 60,
                            margin: 40,
                            marginTop: 40,
                            borderRadius: 10,
                            padding: 20
                        }}>
                            <Text>124-5678-9098-7654</Text>

                        </Card>
                    </CardItem>
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


