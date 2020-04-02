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


export default class Cobrar extends React.Component {
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
                        <Content padder style={{marginTop: -20}}>
                            <Card>
                                <CardItem header button onPress={() =>
                                    this.props.navigation.navigate('ProductList')}>
                                    <Text>Catalogo de produtos</Text>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content padder style={{marginTop: -20}}>
                            <Card>
                                <CardItem header button onPress={() =>
                                this.props.navigation.navigate('GerarBoleto')}>
                                    <Text>Gerar link de boleto</Text>
                                </CardItem>
                            </Card>
                        </Content>
                        <Content padder style={{marginTop: -20}}>
                            <Card>
                                <CardItem header button onPress={() => alert("This is Card Header")}>
                                    <Text>Cabarar com maquineta</Text>
                                </CardItem>
                            </Card>
                        </Content>
                    </Card>
                </Content>
            </Container>
        );
    }
}
