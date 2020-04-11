import React, {useState, useEffect} from 'react';

import {StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, View} from 'react-native';
import {Container, Card, Button, Content, Form, CardItem, Footer, Text, Item, Input, Label} from 'native-base';
import api from "../../../services/api";
import {NavigationActions, StackActions} from "react-navigation";

const Cards = ({navigation}) => {

    const [numberCard, setNumberCard] = useState(null);
    const [nameTitular, setNameTitular] = useState(null);
    const [expiracao, setExpiracao] = useState(null);
    const [cvc, setCvc] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [birth, setBirth] = useState(null);
    const [ddd, setDdd] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [type, setType] = useState(null);
    const [street, setStreet] = useState(null);
    const [adressNumber, setAdressNumber] = useState(null);
    const [district, setDistrict] = useState(null);
    const [city, setCity] = useState(null);
    const [stateAdress, setStateAdress] = useState(null);
    const [cep, setCep] = useState(null);
    const [complement, setComplement] = useState(null);

    useEffect(() => {
        const items = {
            items: {
                numberCard: numberCard,
                nameTitular: nameTitular,
                expiracao: expiracao,
                cvc: cvc,
                name: name,
                email: email,
                cpf: cpf,
                birth: birth,
                ddd: ddd,
                phoneNumber: phoneNumber,
                type: type,
                street: street,
                adressNumber: adressNumber,
                district: district,
                city: city,
                stateAdress: stateAdress,
                cep: cep,
                complement: complement,
            }
        }
    });

    async function submit() {

        try {
            const items = {
                items: {
                    numberCard: numberCard,
                    nameTitular: nameTitular,
                    expiracao: expiracao,
                    cvc: cvc,
                    name: name,
                    email: email,
                    cpf: cpf,
                    birth: birth,
                    ddd: ddd,
                    phoneNumber: phoneNumber,
                    type: type,
                    street: street,
                    adressNumber: adressNumber,
                    district: district,
                    city: city,
                    stateAdress: stateAdress,
                    cep: cep,
                    complement: complement,
                }
            };

            const response = await api.post('/add-credit-card', items);

            const data = response.data;

            props.navigation.dispatch(resetAction);

        } catch (err) {
            console.log(err);
            setErrorMessage('Usuário não existe');
        }
    }

    return (
        <Container>
            <Content>
                <Card styles={{justifyContent: 'center'}}>
                    <Form style={{padding: 10}}>
                        <Item floatingLabel>
                            <Label>Número do cartão</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={numberCard}
                                onChangeText={value => setNumberCard(value)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Nome do titular </Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={nameTitular}
                                onChangeText={value => setNameTitular(value)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Expiraçao</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={expiracao}
                                onChangeText={value => setExpiracao(value)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>CVC</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={cvc}
                                onChangeText={value => setCvc(value)}
                            />
                        </Item>
                        <Text>Dados Pessoais</Text>
                        <Item floatingLabel>
                            <Label>Nome</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={name}
                                onChangeText={value => setName(value)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>E-mail</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={email}
                                onChangeText={value => setEmail(value)}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Nascimento</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={birth}
                                onChangeText={value => setBirth(value)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>CPF</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={cpf}
                                onChangeText={value => setCpf(value)}
                            />
                        </Item>
                        <Text>Telefone</Text>
                        <Item floatingLabel last>
                            <Label>DDD</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={ddd}
                                onChangeText={value => setDdd(value)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Numerno</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={phoneNumber}
                                onChangeText={value => setPhoneNumber(value)}
                            />
                        </Item>
                        <Text>Endereço</Text>
                        <Item floatingLabel last>
                            <Label>Tipo</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={type}
                                onChangeText={value => setType(value)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Rua</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={street}
                                onChangeText={value => setStreet(value)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Numero</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={adressNumber}
                                onChangeText={value => setAdressNumber(value)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Bairro</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={district}
                                onChangeText={value => setDistrict(value)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Cidade</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={city}
                                onChangeText={value => setCity(value)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>UF</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={stateAdress}
                                onChangeText={value => setStateAdress(value)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>CEP</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={cep}
                                onChangeText={value => setCep(value)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Complemento</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={complement}
                                onChangeText={value => setComplement(value)}
                            />
                        </Item>
                        <Button onPress={submit}>
                            <Text>Enviar</Text>
                        </Button>
                    </Form>
                </Card>
            </Content>
        </Container>
    );
};

export default Cards;


