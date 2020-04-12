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

            {data_server.status === false ? navigation.navigate('Cartoes') : setForm({...form, error_server: data_server.message})}

        } catch (err) {

            const formattedErrors = {};
            err.forEach(error => formattedErrors[error.field] = error.message);
            setForm({...form, error: formattedErrors})
        }
    };

    return (
        <Container>
            <Content>
                <Card styles={{justifyContent: 'center'}}>
                    <Text>{form.error_server}</Text>
                    <Form style={{padding: 20}}>
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'Número do cartão'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            keyboardType={'numeric'}
                            onChangeText={value => setForm({...form, number_card: value})}
                        />
                        {form.error['number_card'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['number_card']}</Text>}
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'Nome do titullar'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, name_holder: value})}
                        />
                        {form.error['name_holder'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['name_holder']}</Text>}
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'Expiração'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            keyboardType={'date'}
                            onChangeText={value => setForm({...form, expiration: value})}
                        />
                        {form.error['expiration'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['expiration']}</Text>}
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'CVC'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, cvc: value})}
                        />
                        {form.error['cvc'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['cvc']}</Text>}
                        <Item itemDivider>
                            <Text>Dados Pessoais</Text>
                        </Item>
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'Nome Cliente'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, name_client: value})}
                        />
                        {form.error['name_client'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['name_client']}</Text>}
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'E-mail'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, email_client: value})}
                        />
                        {form.error['email_client'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['email_client']}</Text>}
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'Nascimento'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, birth_client: value})}
                        />
                        {form.error['birth_client'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['birth_client']}</Text>}
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'CPF'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, cpf_client: value})}
                        />
                        {form.error['cpf_client'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['cpf_client']}</Text>}
                        <Item itemDivider>
                            <Text>Telefone</Text>
                        </Item>
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'DDD'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, ddd: value})}
                        />
                        {form.error['ddd'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['ddd']}</Text>}
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'Numero'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, phone_number: value})}
                        />
                        {form.error['phone_number'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['phone_number']}</Text>}
                        <Item itemDivider>
                            <Text>Endereço</Text>
                        </Item>
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'Tipo'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, type: value})}
                        />
                        {form.error['type'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['type']}</Text>}
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'Rua'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, street: value})}
                        />
                        {form.error['street'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['street']}</Text>}
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'Numero'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, adress_nuumber: value})}
                        />
                        {form.error['adress_nuumber'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['adress_nuumber']}</Text>}
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'Bairro'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, district: value})}
                        />
                        {form.error['district'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['district']}</Text>}
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'Cidade'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, city: value})}
                        />
                        {form.error['city'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['city']}</Text>}
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'UF'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, state_adress: value})}
                        />
                        {form.error['state_adress'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['state_adress']}</Text>}
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'CEP'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, zip_code: value})}
                        />
                        {form.error['zip_code'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['zip_code']}</Text>}
                        <Hoshi
                            style={{marginBottom: 20}}
                            label={'Complemento'}
                            backgroudColor={'#fff'}
                            borderColor={'green'}
                            borderHeight={3}
                            inputPadding={16}
                            onChangeText={value => setForm({...form, complement: value})}
                        />
                        {form.error['complement'] && <Text style={{fontSize: 12, color: 'red'}}>{form.error['complement']}</Text>}
                        <Button onPress={() => submit(form)}>
                            <Text>Enviar</Text>
                        </Button>
                    </Form>
                </Card>
            </Content>
        </Container>
    );
};

export default Cards;


