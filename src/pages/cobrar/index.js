import React from 'react';

import {View, Image} from 'react-native';

import {Block, Text, theme, Button as GaButton} from 'galio-framework';

import {
    BlocoGeral,
    Coluna1,
    Coluna2,
    ImagenIcon,
    TextIcons,
} from './styles';

import {Container, Left, Thumbnail, Content, Card, CardItem, Body, Icon, List, ListItem, Right} from 'native-base';
import FooterContent from '../../components/footer';


const Cobrar = ({navigation}) => {
    return (
        <Container>
            <Content>
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center',}}>
                    <Image
                        style={{width: '100%', height: 250}}
                        source={require('../../assets/Icons-cobrar/icon-cobrar.png')}
                    />
                </View>

                <List>
                    <ListItem button onPress={() =>
                        navigation.navigate('ProductList')}>
                        <Left>
                            <CardItem>
                                <Text>Catalogo de produtos</Text>
                            </CardItem>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem button onPress={() =>
                        navigation.navigate('GerarBoleto')}>
                        <Left>
                            <CardItem header>
                                <Text>Gerar link de boleto</Text>
                            </CardItem>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <ListItem button onPress={() => alert("Nao implemetado")}>
                        <Left>
                            <CardItem header>
                                <Text>Cabarar com maquineta</Text>
                            </CardItem>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                </List>
            </Content>
            <FooterContent navigation={navigation}/>
        </Container>
    );
};

export default Cobrar;
