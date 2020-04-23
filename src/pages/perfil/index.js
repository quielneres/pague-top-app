import React, {useEffect, useState} from 'react';

import {
    Container,
    Header,
    Content,
    Body,
    List,
    ListItem,
    Right,
    Left,
} from 'native-base';

import {
    Style,
    Image,
    UserName,
    TextDescription,
    TextItens,
    TouchableOpacity,
    View,

} from './styles';

import {deleteUser} from '../../utils';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FooterContent from '../../components/footer';

const ls = require('react-native-local-storage');

const Profile = ({navigation}) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        ls.get('@ListApp:userToken').then(data => {
            setUser(data.user ?? [])
        })

    }, []);

    const url_img = () => {
        return (
            'https://image.freepik.com/vetores-gratis/empresaria-elegante-avatar-feminino_24877-18073.jpg'
        )
    };

    const data = [
        {
            title: 'Carteira',
            subtitle: 'Meu saldo QR code',
            route: null,
            icon: 'wallet'
        },
        {
            title: 'Forma de pagamentos',
            subtitle: 'Minhas formas de pagamento',
            route: null,
            icon: 'credit-card'
        },
        {
            title: 'Endereços',
            subtitle: 'Meus endereços',
            route: null,
            icon: 'address-card'
        },
        {
            title: 'Extratos',
            subtitle: 'Veja seus extratos',
            route: null,
            icon: 'stream'
        },
        {
            title: 'Transferências',
            subtitle: 'Veja suas transferências',
            route: null,
            icon: 'exchange-alt'
        },
        {
            title: 'Configurações',
            subtitle: 'Mais configuraçoes',
            route: null,
            icon: 'users-cog'
        }
    ];

    const render = (menu) => (

        <ListItem onPress={menu.route}>
            <Left style={Style.left}>
                <View style={Style.leftIcon}>
                    <Icon name={menu.icon} size={18}/>
                </View>
                <View style={Style.leftInfo}>
                    <TextItens>{menu.title}</TextItens>
                    <TextDescription>{menu.subtitle}</TextDescription>
                </View>
            </Left>
            <Right>
                <Icon name="chevron-right" size={18}/>
            </Right>
        </ListItem>
    )

    return (
        <Container>
            <Header style={Style.header}>
                <Left>
                    <Image source={{uri: url_img()}}/>
                </Left>
                <Body>
                <UserName>{user.name}</UserName>
                <TextDescription>Editar perfil</TextDescription>
                </Body>
                <Right>
                    <Icon name={'angle-right'} size={24}/>
                </Right>
            </Header>
            <Content>
                <List style={Style.general_list}>
                    {data.map((m) => render(m))}
                    <ListItem>
                        <TouchableOpacity
                            onPress={() =>
                                deleteUser().then(() => {
                                    navigation.navigate('Loading');
                                })
                            }
                            style={{
                                width: '100%',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                padding: 10
                            }}>
                            <UserName>Sair</UserName>
                            <Right>
                                <Icon name="window-close" size={18}/>
                            </Right>
                        </TouchableOpacity>
                    </ListItem>
                </List>
            </Content>
            <FooterContent navigation={navigation}/>
        </Container>
    );
}

export default Profile;
