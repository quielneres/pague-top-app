import React from 'react';

import {Block, Text, theme, Button as GaButton} from 'galio-framework';

import {
    ContentOptions,
    Coluna1,
    Coluna2,
    ImagenIcon,
    TextIcons,
} from './styles';

import {
    Container, Left, Thumbnail, Content, Card, CardItem, Body,
    List, ListItem, Right, Icon
} from 'native-base';

const PayBill = ({navigation}) => {
    return (
        <Container>
            <Content>
                <ContentOptions>
                    <Card>
                        <CardItem button onPress={() => navigation.navigate('ReadCode')}>
                            <Text>
                                Usar leito de codigo de barras
                            </Text>
                        </CardItem>
                    </Card>
                    <Card style={{margin: 15}}>
                        <CardItem>
                            <Text>
                                Digitar o codigo de barras manualmente
                            </Text>
                        </CardItem>
                    </Card>
                </ContentOptions>
            </Content>
        </Container>
    );
};

export default PayBill;
