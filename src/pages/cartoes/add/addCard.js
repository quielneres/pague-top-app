import React, {useState} from 'react';

import {StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, View} from 'react-native';
import {Container, Card, Button, Content, Form, CardItem, Footer, Text, Item, Input, Label} from 'native-base';
import api from "../../../services/api";

const Cards = ({navigation}) => {

    const [form, setForm] = useState({
        numberCard: null,
        nameCard: null,
        expiracao: null,
        cvc: null,
        name: null,
        email: null,
        nascimento: null,
        cpf: null,
    });

    const [formPhone, setformPhone] = useState({
        ddd: null, number: null
    });
    const [formAdress, setFormAdress] = useState({
        type: null,
        street: null,
        number: null,
        district: null,
        city: null,
        cep: null,
        complement: null,
    });

    // const submit = () => {
    //     const itens = {
    //         numberCard: form.numberCard,
    //         nameCard: form.nameCard,
    //         expiracao: form.expiracao,
    //         cvc: form.cvc,
    //         name: form.name,
    //         email: form.email,
    //         nascimento: form.nascimento,
    //         cpf: form.cpf,
    //         phone: {
    //             ddd: formPhone.ddd, number: formPhone.number
    //         },
    //         adress: {
    //             type: formAdress.type,
    //             street: formAdress.street,
    //             number: formAdress.number,
    //             district: formAdress.district,
    //             city: formAdress.city,
    //             cep: formAdress.cep,
    //             complement: formAdress.complement,
    //         }
    //     }
    //
    //     console.log(itens)
    //
    //     // api.post('/ver-pedido-all')
    //     //     .then(res => {
    //     //         this.setState(
    //     //             {
    //     //                 isLoading: false,
    //     //                 dataSource: res.data.pedido,
    //     //             },
    //     //             function () {
    //     //             },
    //     //         );
    //     //     })
    //     //     .catch(function (error) {
    //     //         console.log(error);
    //     //     });
    // }

    return (
        <Container>
            <Content>
                <Card styles={{justifyContent: 'center'}}>
                    <Form style={{padding: 10}}>
                        <Item floatingLabel>
                            <Label>Numero do cartoa</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={form.numberCard}
                                onChangeText={value => setForm({numberCard: value})}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Nome cartao</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={form.nameCard}
                                onChangeText={value => setForm({nameCard: value})}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Expiraçao</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={form.expiracao}
                                onChangeText={value => setForm({expiracao: value})}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>CVC</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={form.cvc}
                                onChangeText={value => setForm({cvc: value})}
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
                                value={form.name}
                                onChangeText={value => setForm({name: value})}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>E-mail</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={form.email}
                                onChangeText={value => setForm({email: value})}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Nascimento</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={form.nascimento}
                                onChangeText={value => setForm({nascimento: value})}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>CPF</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={form.cpf}
                                onChangeText={value => setForm({cpf: value})}
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
                                value={formPhone.ddd}
                                onChangeText={value => setformPhone({ddd: value})}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Numerno</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={formPhone.number}
                                onChangeText={value => setformPhone({number: value})}
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
                                value={formAdress.type}
                                onChangeText={value => setFormAdress({type: value})}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Rua</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={formAdress.street}
                                onChangeText={value => setFormAdress({street: value})}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Numero</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={formAdress.number}
                                onChangeText={value => setFormAdress({number: value})}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Bairro</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={formAdress.district}
                                onChangeText={value => setFormAdress({district: value})}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Cidade</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={formAdress.city}
                                onChangeText={value => setFormAdress({city: value})}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>CEP</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={formAdress.cep}
                                onChangeText={value => setFormAdress({cep: value})}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Complemento</Label>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder="Digite seu usuário"
                                underlineColorAndroid="rgba(0, 0, 0, 0)"
                                value={formAdress.complement}
                                onChangeText={value => setFormAdress({complement: value})}
                            />
                        </Item>
                        <Button>
                            <Text>Enviar</Text>
                        </Button>
                    </Form>
                </Card>
            </Content>
            <Footer style={{height: 100}}>
                <CardItem>
                    <Button block style={{width: '100%', height: 60, borderRadius: 7, backgroundColor: 'green'}}
                            onPress={() => navigation.navigate('AddCard')}>
                        <Text>Salvar</Text>
                    </Button>
                </CardItem>
            </Footer>
        </Container>
    );
};

export default Cards;


