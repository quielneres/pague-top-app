import React, {useState} from 'react';

import {Container, Button, Content, Form, Item, Input, Label, Text} from 'native-base';

import Styles from "../../components/footer/styles";


const ClientCount = () => {
    const [username, setUsername] = useState(
        {
            name: null,
            enail: null,
            nascimento: null,
            cpf: null,
            telefone: {
                ddd: null,
                number: null
            },
            endereco: {

            }
        }
    );

    console.log(username.name)
    return (
        <Container>
            <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Nome</Label>
                        <Input
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder="Digite seu usuário"
                            underlineColorAndroid="rgba(0, 0, 0, 0)"
                            value={username.name}
                            onChangeText={value => setUsername({name: value})}
                        />
                    </Item>
                    <Item floatingLabel last>
                        <Label>E-mail</Label>
                        <Input/>
                    </Item>

                    <Item floatingLabel last>
                        <Label>Nascimento</Label>
                        <Input/>
                    </Item>
                    <Item floatingLabel last>
                        <Label>CPF</Label>
                        <Input/>
                    </Item>
                    <Item floatingLabel last>
                        <Label>Telefone</Label>
                        <Input/>
                    </Item>
                    <Text>Endereço</Text>
                    <Item floatingLabel last>
                        <Label>Tipo</Label>
                        <Input/>
                    </Item>
                    <Item floatingLabel last>
                        <Label>Rua</Label>
                        <Input/>
                    </Item>
                    <Item floatingLabel last>
                        <Label>Numero</Label>
                        <Input/>
                    </Item>
                    <Item floatingLabel last>
                        <Label>Bairro</Label>
                        <Input/>
                    </Item>
                    <Item floatingLabel last>
                        <Label>Cidade</Label>
                        <Input/>
                    </Item>
                    <Item floatingLabel last>
                        <Label>CEP</Label>
                        <Input/>
                    </Item>
                    <Item floatingLabel last>
                        <Label>Complemento</Label>
                        <Input/>
                    </Item>
                    <Button>
                        <Text>Enviar</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );

}

export default ClientCount;

