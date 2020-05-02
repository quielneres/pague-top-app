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
    Container, Left,Content,
    List, ListItem, Right
} from 'native-base';


import {CheckBox} from 'react-native-elements'

import {View, Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Load from "../../../components/loader";
import api from "../../../services/api";

const ls = require('react-native-local-storage');
import Modal from "../../../components/modal";
import WorningModal from "../../../components/modal/worning";

import { Button } from 'react-native-elements';



const RechargePay = ({navigation}) => {

    const [value, setValue] = useState(navigation.getParam('value'))
    const [cellNumber, setCellNumber] = useState(navigation.getParam('cellNumber'));
    const [operadora, setOperadora] = useState(navigation.getParam('operadora'));
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);
    const [link, setLink] = useState(null);
    const [modal, setModal] = useState(false);
    const [modal_worning, setModalWorning] = useState(false);

    useEffect(() => {
        ls.get('@ListApp:userToken').then(data => {
            setUser(data.user ?? [])
        })

    }, []);

    const payments = [
        {
            id: 1,
            method: 'Usar saldo',
            select: true,
            icon: 'money-bill'
        },
        {
            id: 1,
            method: 'Boleto',
            select: false,
            icon: 'barcode'
        },
        {
            id: 2,
            method: 'Cartao de creditos',
            select: false,
            icon: 'credit-card'
        },
    ];

    // const contentCheckBox = payment => (
    //     <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
    //         <Text>{payment.method}</Text>
    //         <Icon name={payment.icon} size={17}/>
    //     </View>
    //
    // );

    const rendPayments = payment => (
        <View>
            <CheckBox
                textStyle={{width: '100%'}}
                title={payment.method}
                checked={payment.select}
            />
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
                    {payments.map((p) => rendPayments(p))}
                    <List>
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
                        buttonStyle={{width: 200, justifyContent: 'center', backgroundColor: '#4CB1F7', marginTop: 20}}
                        onPress={() => boletoGeneration()}
                        title="Finalizar"
                    />
                </ContentButton>
            </Content>
            {loading ? <Load/> : null}
        </Container>
    );
};

export default RechargePay;
