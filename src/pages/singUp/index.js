import React, {useState} from 'react';

import {validateAll} from 'indicative/validator';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import {Container, Card, Content, Form, CardItem, Item, Input, Label} from 'native-base';
import {Hoshi} from 'react-native-textinput-effects';
import api from '../../services/api';


const SingUp = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirm] = useState('');
    const [userData, setUserData] = useState('');
    const [error, setError] = useState({});
    const [error_server, setErrorServer] = useState([]);


    const registerUser = async () => {

        const data = {
            name: name,
            email: email,
            cpf: cpf,
            password: password,
        };

        // console.log(data);
        const rules = {
            name: 'required|string',
            cpf: 'required|string',
            email: 'required|email',
            password: 'required|string|min:4',
        };

        const messages = {
            required: (field) => `${field} is required`,
            'name': 'Nome contains unallowed characters',
            'cpf': 'Cpf contains unallowed characters',
            'email.email': 'Please enter a valid email address',
            'password.confirmed': 'The password did not match',
            'password.min': 'Password is too short',
        }

        try {
            await validateAll(data, rules, messages)

            const response = await api.post('/register-user', data);

            setUserData(response);

            if (response.data.status === 'error') {

                // const e = response.data.data
                //
                // const formattedErrors = {};
                // e.forEach(error => formattedErrors[error.field] = error.message);
                // setError(formattedErrors)

            }

            if (response.data.status === 'success') {
                navigation.navigate('Landing')
            }

        } catch (e) {
            const formattedErrors = {};
            e.forEach(error => formattedErrors[error.field] = error.message);
            setError(formattedErrors)
        }
    }

    const renderErrorMsg = error => (
        <Text>{error}</Text>
    );

    return (
        <Container>
            <Content>
                <View style={styles.content}>
                    <Text>Register</Text>
                    {/*{error_server.map((e) => renderErrorMsg(e))}*/}
                    <Hoshi
                        style={{marginBottom: 20}}
                        label={'Nome'}
                        backgroudColor={'#fff'}
                        borderColor={'green'}
                        borderHeight={3}
                        inputPadding={16}
                        value={name}
                        onChangeText={name => setName(name)}
                    />
                    {error['name'] && <Text style={{fontSize: 12, color: 'red'}}>{error['name']}</Text>}
                    <Hoshi
                        style={{marginBottom: 20}}
                        label={'E-mail'}
                        backgroudColor={'#fff'}
                        borderColor={'green'}
                        borderHeight={3}
                        inputPadding={16}
                        value={email}
                        onChangeText={email => setEmail(email)}
                    />
                    {error['email'] && <Text style={{fontSize: 12, color: 'red'}}>{error['email']}</Text>}
                    <Hoshi
                        style={{marginBottom: 20}}
                        label={'CPF'}
                        backgroudColor={'#fff'}
                        borderColor={'green'}
                        borderHeight={3}
                        inputPadding={16}
                        value={cpf}
                        onChangeText={cpf => setCpf(cpf)}
                    />
                    {error['cpf'] && <Text style={{fontSize: 12, color: 'red'}}>{error['cpf']}</Text>}
                    <Hoshi
                        style={{marginBottom: 20}}
                        label={'Senha'}
                        secureTextEntry
                        backgroudColor={'#fff'}
                        borderColor={'green'}
                        borderHeight={3}
                        inputPadding={16}
                        value={password}
                        onChangeText={password => setPassword(password)}
                    />
                    {error['password'] && <Text style={{fontSize: 12, color: 'red'}}>{error['password']}</Text>}
                    <Hoshi
                        label={'Confirmar Senha'}
                        secureTextEntry
                        backgroudColor={'#fff'}
                        borderColor={'green'}
                        borderHeight={3}
                        inputPadding={16}
                        style={{marginBottom: 50}}
                        value={password_confirmation}
                        onChangeText={password_confirmation => setPasswordConfirm(password_confirmation)}
                    />
                    <Button title={'Cadastrar'} onPress={() => registerUser()}/>

                </View>
            </Content>
        </Container>
    )
};

const styles = StyleSheet.create({
    content: {
        // backgroundColor: '#4CB1F7'
        flex: 1,
        padding: 10
    },
    card: {
        padding: 15,
        margin: 0,
    },
    form: {
        padding: 0,
        margin: 0,
        // backgroundColor: '#4CB1F7'

    },
    item: {
        padding: 0,
        margin: 0,
        width: '100%',
        flexDirection: 'column',
        marginBottom: 15
    },
    label: {
        // color:  'white',
        width: '100%',
        fontWeight: 'bold'
    },
    input: {
        // backgroundColor: 'white',
        width: '100%',
        height: 45,
        borderWidth: 0.5,
        borderRadius: 7,
        borderColor: 'gray'
    }
});


export default SingUp;
