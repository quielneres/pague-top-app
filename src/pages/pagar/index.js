import React from 'react';

import {Block, Text, theme, Button as GaButton} from 'galio-framework';

import {
    BlocoGeral,
    Coluna1,
    Coluna2,
    ImagenIcon,
    TextIcons,
} from './styles';

import {Container, Left, Thumbnail, Content, Card, CardItem, Body} from 'native-base';


export default class Pagar extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card style={{height: '100%'}}>
                        <CardItem>
                            <Left>
                                <Thumbnail style={{width: 40, height: 40}}
                                           source={require('../../assets/icons-pagar/payment-icon.jpg')}/>
                                <Body>
                                <Text>Faça aqui seus pagamentos</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <Content padder style={{ marginTop: -20 }}>
                            <Card>
                                <CardItem header button onPress={() => alert("This is Card Header")}>
                                    <Text>Contas e boletos</Text>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content padder style={{ marginTop: -20 }}>
                            <Card>
                                <CardItem header button onPress={() => alert("This is Card Header")}>
                                    <Text>Recarga Celular</Text>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content padder style={{ marginTop: -20 }}>
                            <Card>
                                <CardItem header button onPress={() => alert("This is Card Header")}>
                                    <Text>Boletos e Tributos</Text>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content padder style={{ marginTop: -20 }}>
                            <Card>
                                <CardItem header button onPress={() => alert("This is Card Header")}>
                                    <Text>Pagar com QR-Code</Text>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content padder style={{ marginTop: -20 }}>
                            <Card>
                                <CardItem header button onPress={() => alert("This is Card Header")}>
                                    <Text>Enviar Dinheiro</Text>
                                </CardItem>
                            </Card>
                        </Content>
                    </Card>
                </Content>
            </Container>
        );
    }
}
