import React from 'react';

import {StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, View} from 'react-native';
import {Block, Text, theme, Button as GaButton} from 'galio-framework';

import {
    ContantSaldo,
    TextSaldo,
    Link
} from './styles';
import {grey} from "color-name";
import {Container, Header, Content, Tab, Tabs, Footer, FooterTab, Button, Icon} from 'native-base';


export default class Perfil extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <ContantSaldo style={styles.saldo}>
                        <TextSaldo>R$ 150,00</TextSaldo>
                        <Text>Saldo</Text>
                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <Link onPress={() => this.props.navigation.navigate('Saque')}>
                                <Text style={styles.links}>Saque</Text>
                            </Link>
                            <Link onPress={() => this.props.navigation.navigate('Transferir')}>
                                <Text style={styles.links}>Transferir</Text>
                            </Link>
                        </View>
                        <View>
                            <Link onPress={() => this.props.navigation.navigate('Saque')}>
                                <Text style={styles.links2}>Adicionar Dinheiro</Text>
                            </Link>
                        </View>
                    </ContantSaldo>
                </Content>
                <Footer>
                    <FooterTab style={{backgroundColor: '#F2F2F2'}}>
                        <Button vertical onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name="home"/>
                            <Text>Home</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera"/>
                            <Text>Pagar</Text>
                        </Button>
                        <Button vertical>
                            <Icon active name="navigate"/>
                            <Text>Cobrar</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('Perfil')}>
                            <Icon name="settings"/>
                            <Text>Confg</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    saldo: {
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        alignItems: 'center'

    },
    links: {
        textAlign: 'center',
        margin: 10,
        width: 120,
        padding: 5,
        borderWidth: 0.3,
        borderColor: 'grey',
        borderRadius: 4,
    },
    links2: {
        textAlign: 'center',
        width: 260,
        padding: 5,
        borderWidth: 0.3,
        borderColor: 'grey',
        borderRadius: 4,
        marginBottom: 10,
    }
});
