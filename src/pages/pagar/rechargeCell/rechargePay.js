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
} from './styles';

import {
    Container, Left, Button, Content, CheckBox,
    List, ListItem, Right
} from 'native-base';

import {View, Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Load from "../../../components/loader";
import api from "../../../services/api";

const ls = require('react-native-local-storage');
import Modal from "../../../components/modal";
import WorningModal from "../../../components/modal/worning";

const RechargePay = ({navigation}) => {

    const [value, setValue] = useState(navigation.getParam('value'))
    const [cellNumber, setCellNumber] = useState(navigation.getParam('cellNumber'));
    const [operadora, setOperadora] = useState(navigation.getParam('operadora'));
    const [modalVisible, setModalVisible] = useState(true);
    const [swipeablePanelActive, setSwip] = useState(false);
    const [loading, setLoading] = useState(false);
    const [status_server, setStatusServer] = useState(false);
    const [user, setUser] = useState([]);
    const [link, setLink] = useState(null);
    const [modal, setModal] = useState(false);
    const [modal_worning, setModalWorning] = useState(false);

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

    const submit = async () => {

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

            {
                data_server.status === true ? setLink(data_server.link_boleto) : null
            }

            setLoading(false);
            setModal(true);
        } catch (err) {
            console.log(err)
            setLoading(false);
        }
    };

    const boletoGeneration = () => {
        {
            user.id_comprador ? submit() : setModalWorning(true)
        }
    };

    const submitMessage = () => {
        setModal(false);
        navigation.navigate('OrderDetail', {
            data: {
                method: 1,
                origin: 'recharge',
                link: link,
                title: 'Recaga celular',
                number: cellNumber,
                opera: operadora,
                value: value
            }
        })
    };

    const submitWorning = () => {
        setModalWorning(false);
        navigation.navigate('EditProfile', {data_user: user})
    };

    return (
        <Container>
            <Modal
                status={modal}
                menssage={'Boleto gerado com sucesso!'}
                action={() => submitMessage()}
                menssageBtn={'OK'}
            />
            <WorningModal
                status={modal_worning}
                menssage={'Complete o cadastro para continuar!'}
                action={() => submitWorning()}
                menssageBtn={'OK'}
            />
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
            {loading ? <Load/> : null}
        </Container>
    );
};

export default RechargePay;
