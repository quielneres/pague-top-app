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
    List, ListItem, Right
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Pagar = ({navigation}) => {
    return (
        <Container>
            <Content>

                <List>
                    <ListItem onPress={() => navigation.navigate('PayBill')}>
                        <Left>
                            <Text>Contas e boletos</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-right"/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => navigation.navigate('RechargeCell')}>
                        <Left>
                            <Text>Recarga Celular</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-right"/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => alert("This is Card Header")}>
                        <Left>
                            <Text>Boletos e Tributos</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-right"/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => alert("This is Card Header")}>
                        <Left>
                            <Text>Pagar com QR-Code</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-right"/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => alert("This is Card Header")}>
                        <Left>
                            <Text>Enviar Dinheiro</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-right"/>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
};

export default Pagar;
