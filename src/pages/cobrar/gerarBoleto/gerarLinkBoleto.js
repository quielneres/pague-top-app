import React from 'react';

import {Block, Text, theme, Button as GaButton} from 'galio-framework';

import {
    BlocoGeral,
    Coluna1,
    Coluna2,
    ImagenIcon,
    TextIcons,
} from '../styles';

import {
    Container,
    Item,
    Header,
    Left,
    Input,
    Content,
    Card,
    CardItem,
    Body,
    Button,
    Icon,
    Title,
    Right
} from "native-base";
import {white} from "color-name";


export default class GerarBoleto extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent
                                onPress={() =>
                                    this.props.navigation.navigate('Cobrar')}>
                            <Icon name='trash'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Gerar Link</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text>Cancel</Text>
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Card transparent>
                        <CardItem>
                            <Body style={{alignItems: 'center'}}>
                            <Text>
                                Digite um valor
                            </Text>
                            <Item style={{alignItems: 'center', justifyContent: 'center', width: 250, height: 250}}>
                                <Text style={{fontSize: 54, marginLeft: 20}}>
                                    R$
                                </Text>
                                <Input
                                    style={{
                                        fontSize: 54,
                                        height: 100,
                                        width: 50,
                                        fontWeight: 'bold',

                                    }}
                                    keyboardType={'numeric'}
                                    placeholder=' 0,00'
                                />
                            </Item>
                            <Button block info>
                                <Text>Enviar</Text>
                            </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
