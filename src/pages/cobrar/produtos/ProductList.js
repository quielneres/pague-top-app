import React from 'react';

import {Block, Text, theme, Button as GaButton} from 'galio-framework';

import {
    BlocoGeral,
    Coluna1,
    Coluna2,
    ImagenIcon,
    TextIcons,
} from '../styles';

import {Container, Left, Right, Thumbnail, Content, Header, ListItem, Body, List} from 'native-base';


export default class ProductList extends React.Component {
    render() {
        return (
            <Container>
                {/*<Header/>*/}
                <Content>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{uri: 'https://www.dhresource.com/600x600/f2/albu/g10/M01/E8/78/rBVaVlwgz-KAUc-zAABW8VP24l0964.jpg'}}/>
                            </Left>
                            <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{uri: 'https://img.r7.com/images/produtos-eletronicos-amazon-15072019112812168'}}/>
                            </Left>
                            <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{uri: 'https://img.r7.com/images/produtos-eletronicos-amazon-15072019112810661?dimensions=600x315&crop_position=c'}}/>
                            </Left>
                            <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
