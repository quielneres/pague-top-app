import React from 'react';

import {Block, Text, theme, Button as GaButton} from 'galio-framework';

import {
    BlocoGeral,
    Coluna1,
    Coluna2,
    ImagenIcon,
    TextIcons,
} from '../styles';

import {Container, Item, Input, Content, Card, CardItem, Body} from "native-base";
import {white} from "color-name";


export default class GerarBoleto extends React.Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Card transparent>
                        <CardItem>
                            <Body style={{alignItems: 'center'}}>
                            <Text>
                                Escollha um valor
                            </Text>
                            <Item  tyle={{alignItems: 'center'}}>
                                <Text style={{fontSize: 44,}}>
                                    R$
                                </Text>
                                <Input style={{
                                    fontSize: 44,
                                    height: 100,
                                    fontWeight: 'bold',
                                    borderColor: Block

                                }}
                                       placeholder=' 0,00'/>
                            </Item>

                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
