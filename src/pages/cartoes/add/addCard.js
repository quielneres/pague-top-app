import React from 'react';

import {StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, View} from 'react-native';
import {Container,Card, Button, Content, Form, CardItem, Footer, Text, Item, Input, Label} from 'native-base';

const Cards = ({navigation}) => {
    return (
        <Container>
            <Content>
                <Card styles={{justifyContent: 'center'}}>
                    <Form style={{padding: 10}}>
                        <Item floatingLabel>
                            <Label>Numero do cartoa</Label>
                            <Input/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Nome cartao</Label>
                            <Input/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Expiraçao</Label>
                            <Input/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>CVC</Label>
                            <Input/>
                        </Item>
                    </Form>
                </Card>
            </Content>
            <Footer style={{height: 100}}>
                <CardItem>
                    <Button block style={{width: '100%', height: 60, borderRadius: 7, backgroundColor: 'green'}}
                            onPress={() => navigation.navigate('AddCard')}>
                        <Text>Salvar</Text>
                    </Button>
                </CardItem>
            </Footer>
        </Container>
    );
};

export default Cards;


