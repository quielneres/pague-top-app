import React, {useState} from 'react';
import {StackActions, NavigationActions} from 'react-navigation';
import {StatusBar, ActivityIndicator, AsyncStorage, Image, View} from 'react-native';
import PropTypes from 'prop-types';

import api from '../../services/api';

import {
    Container,
    Title,
    TextInformation,
    Error,
    Form,
    Input,
    Button,
    ButtonText,
    TextSingUp,
    ContentSingUp,
    CreateCount,
} from './styles';

export default function Welcome(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    async function saveUser(user) {
        await AsyncStorage.setItem('@ListApp:userToken', JSON.stringify(user));
    }

    async function signIn() {
        if (username.length === 0) {
            return;
        }

        setLoading(true);

        try {
            const credentials = {
                email: username,
                password: password,
            };

            const response = await api.post('/auth/login', credentials);

            const user = response.data;

            await saveUser(user);

            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: 'App'})],
            });

            setLoading(false);

            props.navigation.dispatch(resetAction);
        } catch (err) {
            console.log(err);

            setLoading(false);
            setErrorMessage('Usuário não existe');
        }
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" />
            <Image style={{marginLeft: 30, width:280, height: 150}} source={require('../../assets/logo.jpg')} />

            {!!errorMessage && <Error>{errorMessage}</Error>}

            <Form>
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Digite seu usuário"
                    underlineColorAndroid="rgba(0, 0, 0, 0)"
                    value={username}
                    onChangeText={username => setUsername(username)}
                />

                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Digite sua senha"
                    underlineColorAndroid="rgba(0, 0, 0, 0)"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={password => setPassword(password)}
                />

                <Button onPress={signIn}>
                    {loading ? (
                        <ActivityIndicator size="small" color="#FFF" />
                    ) : (
                        <ButtonText>Prosseguir</ButtonText>
                    )}
                </Button>
            </Form>
            <ContentSingUp>
                <TextSingUp>Não tem uma conta?</TextSingUp>
                <CreateCount
                    onPress={() => props.navigation.navigate('CreateAccount')}
                >
                    <TextSingUp>Criar</TextSingUp>
                </CreateCount>
            </ContentSingUp>
        </Container>
    );
}

Welcome.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

Welcome.propTypes = {
    navigation: PropTypes.shape({
        dispatch: PropTypes.func,
    }).isRequired,
};
