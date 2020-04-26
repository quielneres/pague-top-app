import React, {useState} from 'react';

import {
    ContentButton,
} from './styles';

import {
    Container, Left, Button, Content, Card, CardItem, Body,
    List, ListItem, Right, Icon, Form, Item, Picker, Text
} from 'native-base';

import {Hoshi} from 'react-native-textinput-effects';
import {View} from "react-native";

const RechargeCell = ({navigation}) => {

    const [name, setName] = useState('');
    const [form, setForm] = useState(
        {
            number: '',
            operadora: 'key0',
        }
    );

    console.log(form)


    return (
        <Container>
            <Content>
                <Form style={{padding: 15}}>
                    <Hoshi error
                        label={'Nome'}
                        backgroudColor={'#fff'}
                        borderColor={'#4CB1F7'}
                        borderHeight={1}
                        inputPadding={5}
                        style={{marginBottom: 20, borderBottomWidth: 0.5}}
                        value={form.number}
                        onChangeText={number => setForm({...form, number})}
                    />
                    <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        placeholder="Selcione uma operadora"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={form.operadora}
                        onValueChange={(value) => setForm({...form, operadora: value})}
                    >
                        <Picker.Item label="Selcione uma operadora" value="key0" />
                        <Picker.Item label="Claro" value="Claro" />
                        <Picker.Item label="Vivo" value="Vivo" />
                        <Picker.Item label="Tim" value="Tim" />
                        <Picker.Item label="Oi" value="Oi" />
                    </Picker>
                    <ContentButton>
                        <Button
                            style={{width: '100%', justifyContent: 'center', backgroundColor: '#4CB1F7', marginTop: 20}}
                            onPress={() => navigation.navigate('Recharge', {data: form})}>
                            <Text>Avançar</Text>
                        </Button>
                    </ContentButton>
                </Form>
            </Content>
        </Container>
    );
};

export default RechargeCell;
