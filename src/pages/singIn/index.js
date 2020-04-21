import React, {useState} from 'react';
import {StackActions, NavigationActions} from 'react-navigation';
import {StatusBar, ActivityIndicator, AsyncStorage, Image, View, Alert} from 'react-native';
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
    const [new_count, setNewCount] = useState(props.navigation.getParam('new_count'));

    {
        new_count ?
            Alert.alert(
                //title
                'Secesso ;)',
                //body
                'Cadastro realizado com secesso!',
                [
                    {text: 'Fazer login', onPress: () => setNewCount(false)},
                ],
                {cancelable: false}
                //clicking out side of alert will not cancel
            ) : null
    }

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
            <StatusBar barStyle="light-content"/>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{width: 200, height: 100}} source={require('../../assets/logo.jpg')}/>
            </View>

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
                        <ActivityIndicator size="small" color="#FFF"/>
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
