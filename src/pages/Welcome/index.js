import React, {useState} from 'react';

import {StatusBar, ActivityIndicator, AsyncStorage, Image, View, Text, TouchableOpacity} from 'react-native';

import {Container, Header, Content, Card, CardItem, Button, Icon} from 'native-base';

const Welcome = ({navigation, message}) => {
    return (
        <Container>
            <Content style={{backgroundColor: '#4CB1F7'}}>
                <Card transparent style={{height: 500, justifyContent: 'flex-end'}}>
                    <CardItem style={{margin: 15, backgroundColor: '#4CB1F7'}}>
                        <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>
                            Bem-vindo!
                        </Text>
                    </CardItem>
                    <CardItem style={{margin: 15, flexDirection: 'column', backgroundColor: '#4CB1F7'}}>
                        <Button full light style={{
                            justifyContent: 'flex-start',
                            width: '100%',
                            borderRadius: 7,
                            backgroundColor: 'white',
                        }}>
                            <Icon name={'logo-google'}/>
                            <View style={{ marginLeft: 60}}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Login com o google</Text>
                            </View>
                        </Button>
                        <Button full light style={{
                            width: '100%',
                            borderRadius: 7,
                            marginTop: 10,
                            backgroundColor: 'white',
                        }}
                                    onPress={() => navigation.navigate('CreateAccount')}
                        >
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Criar uma conta</Text>
                        </Button>
                    </CardItem>
                    <CardItem style={{ backgroundColor: '#4CB1F7', justifyContent: 'center'}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                            Ja tem uma conta?
                        </Text>
                        <TouchableOpacity style={{ marginLeft: 10}}
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={{color: 'white', fontWeight: 'bold'}}>Entrar</Text>
                        </TouchableOpacity>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}

export default Welcome;
