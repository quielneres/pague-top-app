import React, {useEffect, useState} from 'react';


import {View, Text} from "react-native";

import {
    ContentNumbers,
    BlockNumber,
    Number,
    ContentValor,
    Value,
    TextNumber,
    ContentButton,
    ContentHeader,
    LabelHeader,
    ButtomClean,
} from './styles';

import {
    Container, Left, Right, Body, Button
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';
import api from "../../services/api";
import SwipeablePanel from 'rn-swipeable-panel';
import {
    ContenDatailsResponse, ContenResponseButton,
    ContentResponse,
    HeaderResponse,
    LinkBoleto,
    TextDetail,
    TitleResponse
} from "../cobrar/styles";

import Load from '../../components/loader';
import {MaskService} from 'react-native-masked-text';
const ls = require('react-native-local-storage');

const GerarBoleto = ({navigation}) => {

    const numbers = [
        {
            group: [
                {
                    data: [
                        {number: 1},
                        {number: 2},
                        {number: 3},
                    ]
                },
                {
                    data: [
                        {number: 4},
                        {number: 5},
                        {number: 6},
                    ]
                },
                {
                    data: [
                        {number: 7},
                        {number: 8},
                        {number: 9},
                    ]
                },
                {
                    data: [
                        {number: 0},
                    ]
                }
            ]
        }
    ];

    const [number, setNumber] = useState({
        numeral: []
    });
    const [value, setValue] = useState(0);
    const [date, setDate] = useState(null);
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


    useEffect(() => {

        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        setDate(date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec);

    }, []);


    const addNumber = (n) => {
        number.numeral.push(n);
        setValue(number.numeral.join(''))
    };

    const cleanNumber = () => {
        {
            number.numeral.join('') >= 0 ?
                number.numeral.pop() : null
        }
        setValue(number.numeral.join(''))
    };

    const renderNumber = data => (
        <View>
            {data.group.map((g) => (
                <BlockNumber>
                    {g.data.map((n) => (
                        <Number onPress={() => addNumber(n.number)}>
                            <TextNumber>{n.number}</TextNumber>
                        </Number>
                    ))}
                </BlockNumber>
            ))}
        </View>
    );


    const boletoGeneration = async () => {
        setLoading(true);

        const itens = {
            id_comprador: user.id_comprador,
            valor: value,
            preco: value,
            quantidade: 1,
            descricao: 'Boleto',
            detalhes: 'Boleto de cobrança',
            payment_method: 1,
            cell_number: '',
            operadora_name: ''

        };

        try {
            const response = await api.post('/new-request', itens);
            const data_server = response.data;

            {
                data_server.status === false ? setStatusServer(false) : setStatusServer(true)
            }

            {
                data_server.status === true ? setLink(data_server.link_boleto) : null
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
            <ContentHeader>
                <LabelHeader>Digite um valor:</LabelHeader>
            </ContentHeader>
            <ContentValor>
                <Value>
                    {MaskService.toMask('money', value, {unit: 'R$ ', separator: ',', delimiter: '.'})}
                </Value>
                <ButtomClean onPress={() => cleanNumber()}>
                    <Icon name={'angle-left'} size={30}/>
                </ButtomClean>
            </ContentValor>
            <ContentNumbers>
                {numbers.map((data) => renderNumber(data))}
                <ContentButton>
                    <Button
                        style={{backgroundColor: '#4CB1F7', justifyContent: 'center'}}
                        onPress={() => boletoGeneration()}
                    >
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>Gerar boleto</Text>
                    </Button>
                </ContentButton>
            </ContentNumbers>
            <Swipeable/>
            {loading ? <Load/> : null}
        </Container>
    );
};

export default GerarBoleto;
