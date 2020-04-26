import React from 'react';

import {Block, Text, theme, Button as GaButton} from 'galio-framework';

import {
    BlocoGeral,
    Coluna1,
    Coluna2,
    ImagenIcon,
    TextIcons,
} from './styles';

import {
    Container, Left, Thumbnail, Content, Card, CardItem, Body,
    List, ListItem, Right, Icon
} from 'native-base';

const Pagar = ({navigation}) => {
    return (
        <Container>
            <Content>

                <List>
                    <ListItem onPress={() => alert("This is Card Header")}>
                        <Left>
                            <CardItem header>
                                <Text>Contas e boletos</Text>
                            </CardItem>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => navigation.navigate('RechargeCell')}>
                        <Left>
                            <CardItem header>
                                <Text>Recarga Celular</Text>
                            </CardItem>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => alert("This is Card Header")}>
                        <Left>
                            <CardItem header>
                                <Text>Boletos e Tributos</Text>
                            </CardItem>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => alert("This is Card Header")}>
                        <Left>
                            <CardItem header>
                                <Text>Pagar com QR-Code</Text>
                            </CardItem>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => alert("This is Card Header")}>
                        <Left>
                            <CardItem header>
                                <Text>Enviar Dinheiro</Text>
                            </CardItem>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
};

export default Pagar;
