import React, {useEffect, useState} from 'react';

import {
    RechargePayHeader,
    RechargePayTitle,
    PayTextValue,
    RechargePayTitleInfo,
    ContentDetails,
    ContentInfo,
    TextIndice,
    TextValue,
    ContentButton,
    ContentPayment,
    ContenDatailsResponse, ContenResponseButton,
    ContentResponse,
    HeaderResponse,
    LinkBoleto,
    TextDetail,
    TitleResponse
} from './styles';

import {
    Container, Left, Button, Content, CheckBox, CardItem, Body,
    List, ListItem, Right, Form, Item, Picker, Text
} from 'native-base';

import {View, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Load from "../../../components/loader";
import api from "../../../services/api";
import SwipeablePanel from 'rn-swipeable-panel';

const ls = require('react-native-local-storage');

const RechargePay = ({navigation}) => {

    // const [data] =  navigation.state.params;
    const [value, setValue] = useState(navigation.getParam('value'))
    const [cellNumber, setCellNumber] = useState(navigation.getParam('cellNumber'));
    const [operadora, setOperadora] = useState(navigation.getParam('operadora'));
    const [modalVisible, setModalVisible] = useState(true);
    const [swipeablePanelActive, setSwip] = useState(false);
    const [loading, setLoading] = useState(false);
    const [status_server, setStatusServer] = useState(false);
    const [user, setUser] = useState([]);
    const [link, setLink] = useState(null);

    useEffect(() => {
        ls.get('@ListApp:userToken').then(data => {
            setUser(data.user ?? [])
        })

    }, []);

    const componentDidMount = () => {
        this.openPanel();
    };

    const openPanel = () => {
        setSwip(true);
    };

    const closePanel = () => {
        navigation.goBack(null)
        setSwip(false);
    };

    // console.log(user)

    const payments = [
        {
            id: 1,
            method: 'Boleto',
            select: true,
            icon: 'barcode'
        },
        {
            id: 2,
            method: 'Cartao de creditos',
            select: false,
            icon: 'credit-card'
        },
    ];

    const rendPayments = payment => (
        <View>
            <ListItem>
                <Left>
                    <CheckBox checked={payment.select}/>
                    <Text style={{marginLeft: 20}}>{payment.method}</Text>
                </Left>
                <Right>
                    <Icon name={payment.icon} size={17}/>
                </Right>
            </ListItem>
        </View>
    );

    const boletoGeneration = async () => {
        setLoading(true);

        const itens = {
            id_comprador: user.id_comprador,
            valor: value,
            preco: value,
            quantidade: 1,
            descricao: 'Recarga',
            detalhes: 'Recarga Celular',
            payment_method: 1,
            cell_number: cellNumber,
            operadora_name: operadora

        };

        try {
            const response = await api.post('/new-request', itens);
            const data_server = response.data;
            console.log(data_server)
            {
                data_server.status === false ? setStatusServer(false) : setStatusServer(true)
            }

            {
                data_server.status === true ? setLink(data_server.link_boleto): null
            }

            setLoading(false);
            setSwip(true)
        } catch (err) {
            console.log(err)
            setLoading(false);
        }
    };

    const Swipeable = () => (

        <SwipeablePanel
            fullWidth
            isActive={swipeablePanelActive}
            onClose={closePanel}
            onPressCloseButton={closePanel}
        >
            <ContentResponse>
                <HeaderResponse>
                    {status_server
                        ?
                        <View style={{alignItems: 'center'}}>
                            <Icon name={'grin'} color={'green'} size={30}/>
                            <TitleResponse style={{color: 'green'}}> Boleto gerado com secesso!</TitleResponse>
                        </View>
                        :
                        <View style={{alignItems: 'center'}}>
                            <Icon name={'frown'} color={'red'} size={30}/>
                            <TitleResponse style={{color: 'red'}}> Erro em sua solicitacao!</TitleResponse>
                        </View>
                    }
                </HeaderResponse>
                {status_server
                    ?
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <ContenDatailsResponse>
                            <TextDetail> Acesse o link para baixar o boleto:</TextDetail>
                            <LinkBoleto style={{alignItems: 'center', justifyContent: 'center'}}>{link}</LinkBoleto>
                        </ContenDatailsResponse>
                        <ContenResponseButton>
                            <Button style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}
                                    onPress={() => navigation.goBack(null)}>
                                <Text  style={{alignItems: 'center', justifyContent: 'center'}}>Enviar link</Text>
                            </Button>
                        </ContenResponseButton>
                    </View>
                    : <ContenResponseButton>
                        <Button style={{width: '100%', justifyContent: 'center', borderEndColor: 'red'}}
                                onPress={() => navigation.goBack(null)}>
                            <Text>Fechar</Text>
                        </Button>
                    </ContenResponseButton>
                }
            </ContentResponse>
        </SwipeablePanel>
    );


    return (
        <Container>
            <Content>
                <RechargePayHeader>
                    <Icon name={'mobile-alt'} size={40} color={'#4CB1F7'}/>
                    <RechargePayTitleInfo>
                        <RechargePayTitle>
                            Racarga de Celular
                        </RechargePayTitle>
                        <PayTextValue>
                            R$ {value},00
                        </PayTextValue>
                    </RechargePayTitleInfo>
                </RechargePayHeader>
                <ContentDetails>
                    <ContentInfo>
                        <TextIndice>Número:</TextIndice>
                        <TextValue>{cellNumber}</TextValue>
                    </ContentInfo>
                    <ContentInfo>
                        <TextIndice>Operadora:</TextIndice>
                        <TextValue>{operadora}</TextValue>
                    </ContentInfo>
                </ContentDetails>
                <ContentPayment>
                    <List>
                        {payments.map((p) => rendPayments(p))}
                        <ListItem>
                            <Left>
                                <Text style={{marginLeft: 20}}>Adicionar cartão</Text>
                            </Left>
                            <Right>
                                <Icon name={'plus'} size={17}/>
                            </Right>
                        </ListItem>
                    </List>
                </ContentPayment>
                <ContentButton>
                    <Button
                        style={{width: '100%', justifyContent: 'center', backgroundColor: '#4CB1F7', marginTop: 20}}
                        onPress={() => boletoGeneration()}>
                        <Text>Finalizar</Text>
                    </Button>
                </ContentButton>
            </Content>
            <Swipeable/>
            {loading ? <Load/> : null}
        </Container>
    );
};

export default RechargePay;
