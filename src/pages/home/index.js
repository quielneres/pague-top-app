import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {Image} from "react-native";

import Styles from './Style';
import Valores from './Valores';
import ContaDigital from './ContaDigital';
import UltimasVendas from './UltimasVendas';

import {Container, FooterTab, Button, Content, Card, CardItem, Body, Text} from 'native-base';
import FooterContent from '../../components/footer';
import {ImagenIcon} from "../descontos/styles";

class Home extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card transparent style={{
                        padding: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomWidth: 0.3
                    }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ola, Boa noite Ezequiel</Text>
                        <Image
                            style={{width: 30, height: 30, borderRadius: 50}}
                            source={{uri: 'https://img2.gratispng.com/20180518/poz/kisspng-computer-icons-avatar-user-profile-photographer-5afeac6a8a4057.9798500715266397225663.jpg'}}
                        />
                    </Card>

                    <Card transparent>
                        <ScrollView
                            horizontal={true}
                            contentContainerStyle={{}}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={200}
                            decelerationRate="fast"
                            pagingEnabled
                        >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('CarteiraDigital')}>
                                <CardItem header
                                          style={{
                                              margin: 15,
                                              width: 200,
                                              height: 140,
                                              borderRadius: 5,
                                              flexDirection: 'column',
                                              backgroundColor: '#0BBFAA',
                                          }}>
                                    <Text>Saldo</Text>
                                    <Text style={{fontSize: 24, marginTop: 20, color: '#fff', fontWeight: 'bold'}}>R$
                                        1.500,00</Text>
                                </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Extrato')}>
                                <CardItem header
                                          style={{
                                              margin: 15,
                                              width: 200,
                                              height: 140,
                                              borderRadius: 5,
                                              flexDirection: 'column',
                                              backgroundColor: '#0850FF',
                                              justifyContent: 'center',
                                          }}>
                                    <Text style={{fontSize: 24, color: '#fff', fontWeight: 'bold'}}>Extratos</Text>
                                </CardItem>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('CarteiraDigital')}>
                                <CardItem header
                                          style={{
                                              margin: 15,
                                              width: 200,
                                              height: 140,
                                              borderRadius: 5,
                                              flexDirection: 'column',
                                              backgroundColor: '#B82D0F',
                                              justifyContent: 'center',
                                          }}>
                                    <Text
                                        style={{fontSize: 24, color: '#fff', fontWeight: 'bold'}}>Transferencias</Text>
                                </CardItem>
                            </TouchableOpacity>
                        </ScrollView>
                    </Card>
                    <Card style={{
                        backgroundColor: '#F2F2F2',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingLeft: 15,
                        paddingRight: 15,
                        marginTop: 10
                    }}
                          transparent>
                        <CardItem style={{flexDirection: 'column', backgroundColor: '#F2F2F2',}}>
                            <Text style={{fontSize: 12, color: '#707070'}}>Disponivel</Text>
                            <Text style={{fontWeight: 'bold'}}>R$ 25,00</Text>
                        </CardItem>
                        <CardItem style={{flexDirection: 'column', backgroundColor: '#F2F2F2',}}>
                            <Text style={{fontSize: 12, color: '#707070'}}>A liberar</Text>
                            <Text style={{fontWeight: 'bold'}}>R$ 15,00</Text>
                        </CardItem>
                        <CardItem style={{flexDirection: 'column', backgroundColor: '#F2F2F2',}}>
                            <Text style={{fontSize: 12, color: '#707070',}}>Saldo total</Text>
                            <Text style={{fontWeight: 'bold'}}>R$ 40,00</Text>
                        </CardItem>
                    </Card>
                    <Card transparent>
                        <Content padder>
                            <CardItem>
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ultimas transacoes</Text>
                            </CardItem>
                            <Card>
                                <CardItem
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        backgroundColor: '#F2F2F2'
                                    }}
                                    header button onPress={() => alert("This is Card Header")}>
                                    <Text>Data: 205/03/20 14:38</Text>
                                    <Text>Compardor: Aline de Jesus</Text>
                                    <Text>Valor: R$ 700,00</Text>
                                    <Text>MASTER CARD</Text>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        backgroundColor: '#F2F2F2'
                                    }}
                                    header button onPress={() => alert("This is Card Header")}>
                                    <Text>Data: 20/03/20 17:38</Text>
                                    <Text>Compardor: Carlos de Lima</Text>
                                    <Text>Valor: R$ 700,00</Text>
                                    <Text>MASTER CARD</Text>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem
                                    style={{
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        backgroundColor: '#F2F2F2'
                                    }}
                                    header button onPress={() => alert("This is Card Header")}>
                                    <Text>Data: 04/02/20 10:15</Text>
                                    <Text>Compardor: Laura Santos Neres</Text>
                                    <Text>Valor: R$ 700,00</Text>
                                    <Text>MASTER CARD</Text>
                                </CardItem>
                            </Card>
                        </Content>
                    </Card>
                    <Card>
                        <Content padder>
                            <CardItem>
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Descontos</Text>
                            </CardItem>
                            <ScrollView
                                horizontal={true}
                                contentContainerStyle={{}}
                                showsHorizontalScrollIndicator={false}
                                scrollEventThrottle={200}
                                decelerationRate="fast"
                                pagingEnabled
                            >

                                <CardItem header
                                          style={{
                                              margin: 15,
                                              borderWidth: 0.5,
                                              width: 150,
                                              height: 150,
                                              borderRadius: 5,
                                              flexDirection: 'column'
                                          }}>
                                    <Image
                                        style={{
                                            width: 80,
                                            height: 80,
                                        }}
                                        source={require('./../../assets/icons-descontos/comercio.png')}
                                    />
                                    <Text>Comercio</Text>
                                </CardItem>

                                <CardItem header
                                          style={{
                                              margin: 15,
                                              borderWidth: 0.5,
                                              width: 150,
                                              height: 150,
                                              borderRadius: 5,
                                              flexDirection: 'column'
                                          }}>
                                    <Image
                                        style={{
                                            width: 80,
                                            height: 80,
                                        }}
                                        source={require('./../../assets/icons-descontos/farmacia.png')}
                                    />
                                    <Text>Famacias</Text>
                                </CardItem>


                                <CardItem header
                                          style={{
                                              margin: 15,
                                              borderWidth: 0.5,
                                              width: 150,
                                              height: 150,
                                              borderRadius: 5,
                                              flexDirection: 'column'
                                          }}>
                                    <Image
                                        style={{
                                            width: 80,
                                            height: 80,
                                        }}
                                        source={require('./../../assets/icons-descontos/retsaurante.png')}
                                    />
                                    <Text>Restaurantes</Text>
                                </CardItem>
                                <CardItem header
                                          style={{
                                              margin: 15,
                                              borderWidth: 0.5,
                                              width: 150,
                                              height: 150,
                                              borderRadius: 5,
                                              flexDirection: 'column'
                                          }}>
                                    <Image
                                        style={{
                                            width: 80,
                                            height: 80,
                                        }}
                                        source={require('./../../assets/icons-descontos/supermarket.png')}
                                    />
                                    <Text>Supermercados</Text>
                                </CardItem>

                            </ScrollView>
                        </Content>
                    </Card>
                </Content>
                <FooterContent navigation={this.props.navigation}/>
            </Container>
    );
    }
    }

    export default Home;


