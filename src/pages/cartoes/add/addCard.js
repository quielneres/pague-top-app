import React, {useState, useEffect} from 'react';

import {StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, View} from 'react-native';
import {
    Container,
    Card,
    Button,
    Content,
    Form,
    CardItem,
    Footer,
    Text,
    Item,
    Input,
    Label,
    ListItem, List
} from 'native-base';
import {validateAll} from 'indicative/validator';
import api from "../../../services/api";
import {NavigationActions, StackActions} from "react-navigation";

import {Hoshi} from 'react-native-textinput-effects';

const Cards = ({navigation}) => {

    const [form, setForm] = useState({
        number_card: '',
        name_holder: '',
        expiration: '',
        cvc: '',
        name_client: '',
        email_client: '',
        cpf_client: '',
        birth_client: '',
        ddd: '',
        phone_number: '',
        type: '',
        street: '',
        adress_nuumber: '',
        district: '',
        city: '',
        state_adress: '',
        zip_code: '',
        complement: '',
        error: {},
        error_server: '',
    });

    useEffect(() => {

    });

    const submit = async (data) => {

        const rules = {
            number_card: 'required',
            name_holder: 'required|string',
            expiration: 'required',
            cvc: 'required',
            name_client: 'required|string',
            email_client: 'required|email',
            cpf_client: 'required|string',
            birth_client: 'required',
            ddd: 'required|string',
            phone_number: 'required|string',
            type: 'required|string',
            street: 'required|string',
            adress_nuumber: 'required',
            district: 'required|string',
            city: 'required|string',
            state_adress: 'required|string',
            zip_code: 'required',
            complement: 'required|string',

        };

        const messages = {
            required: (field) => `${field} is required`,
            'email.email': 'Please enter a valid email address',
        };

        try {
            await validateAll(data, rules, messages);

            const response = await api.post('/add-credit-card', data);
            const data_server = response.data;

            {
                data_server.status === false ? navigation.navigate('Cartoes') : setForm({
                    ...form,
                    error_server: data_server.message
                })
            }

        } catch (err) {

            const formattedErrors = {};
            err.forEach(error => formattedErrors[error.field] = error.message);
            setForm({...form, error: formattedErrors})
        }
    };

    return (
        <Container>
            <Content>
                <Text>{form.error_server}</Text>
                <Form style={{margin: 10}}>
                    <Hoshi
                        style={{marginBottom: 0, borderBottomWidth: 0.5}}
                        label={'Número do cartão'}
                        backgroudColor={'#fff'}
                        borderColor={'#4CB1F7'}
                        borderHeight={1}
                        inputPadding={20}
                        keyboardType={'numeric'}
                        onChangeText={value => setForm({...form, number_card: value})}
                    />
                    {form.error['number_card'] &&
                    <Text style={{fontSize: 12, color: 'red'}}>{form.error['number_card']}</Text>}
                    <Hoshi
                        style={{marginBottom: 0, borderBottomWidth: 0.5}}
                        label={'Nome do titullar'}
                        backgroudColor={'#fff'}
                        borderColor={'#4CB1F7'}
                        borderHeight={1}
                        inputPadding={20}
                        onChangeText={value => setForm({...form, name_holder: value})}
                    />
                    {form.error['name_holder'] &&
                    <Text style={{fontSize: 12, color: 'red'}}>{form.error['name_holder']}</Text>}
                    <View style={{ flexDirection: 'row'}}>
                        <View style={{ width: '60%'}}>
                            <Hoshi
                                style={{marginBottom: 0, borderBottomWidth: 0.5}}
                                label={'Expiração'}
                                backgroudColor={'#fff'}
                                borderColor={'#4CB1F7'}
                                borderHeight={1}
                                inputPadding={20}
                                onChangeText={value => setForm({...form, expiration: value})}
                            />
                            {form.error['expiration'] &&
                            <Text style={{fontSize: 12, color: 'red'}}>{form.error['expiration']}</Text>}
                        </View>
                        <View style={{ width: '30%', marginLeft: '10%'}}>
                            <Hoshi
                                style={{marginBottom: 0, borderBottomWidth: 0.5}}
                                label={'CVC'}
                                backgroudColor={'#fff'}
                                borderColor={'#4CB1F7'}
                                borderHeight={1}
                                inputPadding={20}
                                onChangeText={value => setForm({...form, cvc: value})}
                            />
                            {form.error['cvc'] &&
                            <Text style={{fontSize: 12, marginBottom: 50, color: 'red'}}>{form.error['cvc']}</Text>}
                        </View>
                    </View>
                    <Button onPress={() => submit(form)}>
                        <Text>Enviar</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
};

export default Cards;


