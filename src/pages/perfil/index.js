import React, {useEffect, useState} from 'react';

import {Image, View, TouchableOpacity, AsyncStorage} from "react-native";
import {
    Container,
    Header,
    Content,
    Body,
    Card,
    CardItem,
    List,
    ListItem,
    Footer,
    FooterTab,
    Button,
    Right,
    Left,
    Text
} from 'native-base';

import {deleteUser} from '../../utils';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ls = require('react-native-local-storage')

const Profile = ({navigation}) => {

    console.log(ls, 111111111111111)


    const [user, setUser] = useState(null);

    useEffect(() => {
        async function handleUserNextScreen() {
            const userToken = await AsyncStorage.getItem('@ListApp:userToken').then(data => {
                setUser(userToken ?? null)


                console.log(data.user)
            });
        }

        handleUserNextScreen();
    }, []);
    //

    return (
        <Container>
            <Header>
                <Left>
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 100,
                            marginTop: 0,
                            borderWidth: 1,
                            borderColor: 'white'
                        }}
                        source={{uri: 'https://image.freepik.com/vetores-gratis/empresaria-elegante-avatar-feminino_24877-18073.jpg'}}
                    />
                </Left>
                <Body>
                <Text style={{color: '#fff'}}></Text>
                </Body>
                <Right>
                    <Icon name={'play'} color={'#fff'}/>
                </Right>
            </Header>
            <Content>

            </Content>

            {/*<Content>*/}
            {/*<Card style={{height: '100%'}}>*/}
            {/*<CardItem style={{*/}
            {/*width: '100%',*/}
            {/*height: 400,*/}
            {/*backgroundColor: '#4CB1F7',*/}
            {/*}}>*/}

            {/*</CardItem>*/}
            {/*<CardItem style={{*/}
            {/*justifyContent: 'center',*/}
            {/*margin: 15,*/}
            {/*marginTop: -300,*/}
            {/*// height: 200,*/}
            {/*flexDirection: 'column'*/}
            {/*}}>*/}
            {/*<Image*/}
            {/*style={{*/}
            {/*width: 130,*/}
            {/*height: 130,*/}
            {/*borderRadius: 100,*/}
            {/*marginTop: -70,*/}
            {/*borderWidth: 3,*/}
            {/*borderColor: 'white'*/}
            {/*}}*/}
            {/*source={{uri: 'https://image.freepik.com/vetores-gratis/empresaria-elegante-avatar-feminino_24877-18073.jpg'}}*/}
            {/*/>*/}
            {/*<View style={{width: '100%', marginTop: 100}}>*/}
            {/*<List>*/}
            {/*<ListItem itemDivider>*/}
            {/*<Text style={{fontWeight: 'bold'}}>Dados Pessoais</Text>*/}
            {/*</ListItem>*/}
            {/*<ListItem>*/}
            {/*<Icon name={'user'}/>*/}
            {/*<Text style={{marginLeft: 10}}>*/}
            {/*Ezequiel Neres Nascimento*/}
            {/*</Text>*/}
            {/*</ListItem>*/}
            {/*<ListItem>*/}
            {/*<Icon name={'document'}/>*/}
            {/*<Text style={{marginLeft: 10}}> 735.016.111-53</Text>*/}
            {/*</ListItem>*/}
            {/*<ListItem>*/}
            {/*<Icon name={'mail'}/>*/}
            {/*<Text style={{marginLeft: 10}}>quielneres@gmail.com</Text>*/}
            {/*</ListItem>*/}
            {/*<ListItem>*/}
            {/*<Icon name={'call'}/>*/}
            {/*<Text style={{marginLeft: 10}}>61 9 9330-9696</Text>*/}
            {/*</ListItem>*/}
            {/*<ListItem itemDivider style={{justifyContent: 'space-between'}}>*/}
            {/*<Text>Cartões</Text>*/}
            {/*<TouchableOpacity onPress={() => this.props.navigation.navigate('Cartoes')}>*/}
            {/*<Icon name={'md-add-circle'}/>*/}
            {/*</TouchableOpacity>*/}
            {/*</ListItem>*/}
            {/*<ListItem>*/}
            {/*<Icon name={'card'}/>*/}
            {/*<View style={{*/}
            {/*flexDirection: 'row',*/}
            {/*justifyContent: 'space-between',*/}
            {/*width: '100%',*/}
            {/*}}>*/}
            {/*<Text style={{marginLeft: 10}}>**** **** **** 1234</Text>*/}
            {/*<Icon style={{marginRight: 20}} name={'trash'}/>*/}
            {/*</View>*/}
            {/*</ListItem>*/}
            {/*<ListItem itemDivider style={{justifyContent: 'space-between'}}>*/}
            {/*<Text>Conta cliente</Text>*/}
            {/*<TouchableOpacity onPress={() => this.props.navigation.navigate('ClientCount')}>*/}
            {/*<Icon name={'md-add-circle'}/>*/}
            {/*</TouchableOpacity>*/}
            {/*</ListItem>*/}
            {/*</List>*/}
            {/*</View>*/}
            {/*<View style={{*/}
            {/*marginTop: 40,*/}
            {/*}}>*/}
            {/*<TouchableOpacity*/}
            {/*onPress={() =>*/}
            {/*deleteUser().then(() => {*/}
            {/*this.props.navigation.navigate('Loading');*/}
            {/*})*/}
            {/*}*/}
            {/*style={{width: 350, padding: 15}}>*/}
            {/*<Text>Sair</Text>*/}
            {/*</TouchableOpacity>*/}
            {/*</View>*/}
            {/*</CardItem>*/}
            {/*</Card>*/}
            {/*</Content>*/}
            {/*<Footer>*/}
            {/*<FooterTab style={{backgroundColor: '#F2F2F2'}}>*/}
            {/*<Button vertical onPress={() => this.props.navigation.navigate('Home')}>*/}
            {/*<Icon name="home"/>*/}
            {/*<Text>Home</Text>*/}
            {/*</Button>*/}
            {/*<Button vertical>*/}
            {/*<Icon name="camera"/>*/}
            {/*<Text>Pagar</Text>*/}
            {/*</Button>*/}
            {/*<Button vertical>*/}
            {/*<Icon active name="navigate"/>*/}
            {/*<Text>Cobrar</Text>*/}
            {/*</Button>*/}
            {/*<Button vertical onPress={() => this.props.navigation.navigate('Perfil')}>*/}
            {/*<Icon name="settings"/>*/}
            {/*<Text>Confg</Text>*/}
            {/*</Button>*/}
            {/*</FooterTab>*/}
            {/*</Footer>*/}
        </Container>
    );

}

export default Profile;
