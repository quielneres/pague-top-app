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
import FooterContent from "../../components/footer";

const Pagar = ({navigation}) => {
    return (
        <Container>
            <Content>

                <List style={{ marginTop: 15}}>
                    <ListItem onPress={() => navigation.navigate('PayBill')}>
                        <Left style={{alignItems: 'center'}}>
                            <Icon name="barcode" size={20} style={{marginRight: 10}}/>
                            <Text>Contas e boletos</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-right"/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => navigation.navigate('RechargeCell')}>
                        <Left style={{alignItems: 'center'}}>
                            <Icon name="mobile-alt" size={20} style={{marginRight: 10, marginLeft: 5}}/>
                            <Text>Recarga Celular</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-right"/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => alert("This is Card Header")}>
                        <Left style={{alignItems: 'center'}}>
                            <Icon name="barcode" size={20} style={{marginRight: 10}}/>
                            <Text>Boletos e Tributos</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-right"/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => alert("This is Card Header")}>
                        <Left style={{alignItems: 'center'}}>
                            <Icon name="qrcode" size={20} style={{marginRight: 10}}/>
                            <Text>Pagar com QR-Code</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-right"/>
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => alert("This is Card Header")}>
                        <Left style={{alignItems: 'center'}}>
                            <Icon name="money-bill-alt" size={20} style={{marginRight: 10}}/>
                            <Text>Enviar Dinheiro</Text>
                        </Left>
                        <Right>
                            <Icon name="chevron-right"/>
                        </Right>
                    </ListItem>
                </List>
            </Content>
            <FooterContent navigation={navigation}/>
        </Container>
    );
};

export default Pagar;
