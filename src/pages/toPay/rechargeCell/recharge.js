import React, {useState} from 'react';

import {
    RechargeHeader,
    RechargeTitle,
    BlockNumber,
    Number,
    TextNumber,
    ContentNumbers,
    TextCifrao,
} from './styles';

import {
    Container, Left, Button, Content, Card, CardItem, Body,
    List, ListItem, Right, Icon, Form, Item, Picker, Text
} from 'native-base';
import {View} from "react-native";


const RechargeCells = ({navigation}) => {
    const [data_phone, setDate] =  useState(navigation.getParam('data'));

    const RechargeValue = [
        {
            group: [
                {
                    data: [
                        {number: 10},
                        {number: 13},
                        {number: 15},
                        {number: 20},
                    ]
                },
                {
                    data: [
                        {number: 25},
                        {number: 30},
                        {number: 35},
                        {number: 40},
                    ]
                },
                {
                    data: [
                        {number: 50},
                        {number: 100},
                    ]
                }
            ]
        }
    ];

    const renderNumber = data => (

        <View>
            {data.group.map((g) => (
                <BlockNumber>
                    {g.data.map((n) => (
                        <Number onPress={() => navigation.navigate('RechargePay', {
                            value: n.number,
                            cellNumber: data_phone.number,
                            operadora: data_phone.operadora
                        })}>
                            <TextCifrao>R$</TextCifrao>
                            <TextNumber>{n.number}</TextNumber>
                        </Number>
                    ))}
                </BlockNumber>
            ))}
        </View>
    );

    return (
        <Container>
            <Content>
                <RechargeHeader>
                    <RechargeTitle>Valor da recarga</RechargeTitle>
                </RechargeHeader>
                <ContentNumbers
                    horizontal={true}
                >
                    {RechargeValue.map((data) => renderNumber(data))}
                </ContentNumbers>
            </Content>
        </Container>
    );
};

export default RechargeCells;
