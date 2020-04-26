import React, {useState} from 'react';

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
    Container, Left, Button, Content, CheckBox, CardItem, Body,
    List, ListItem, Right, Form, Item, Picker, Text
} from 'native-base';
import {View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


const RechargePay = ({navigation}) => {

    // const [data] =  navigation.state.params;
    const [value, setValue] =  useState(navigation.getParam('value'))
    const [cellNumber, setCellNumber] =  useState(navigation.getParam('cellNumber'));
    const [operadora, setOperadora] =  useState(navigation.getParam('operadora'));

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
                    <CheckBox checked={payment.select} />
                    <Text style={{ marginLeft: 20 }}>{payment.method}</Text>
                </Left>
                <Right>
                    <Icon name={payment.icon} size={17}/>
                </Right>
            </ListItem>
        </View>
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
                    </List>
                </ContentPayment>
                <ContentButton>
                    <Button
                        style={{width: '100%', justifyContent: 'center', backgroundColor: '#4CB1F7', marginTop: 20}}
                        onPress={() => navigation.navigate('Recharge')}>
                        <Text>Finalizar</Text>
                    </Button>
                </ContentButton>
            </Content>
        </Container>
    );
};

export default RechargePay;
