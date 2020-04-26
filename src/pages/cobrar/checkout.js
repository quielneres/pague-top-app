import React, {useState} from 'react';

import {ActivityIndicator, View} from "react-native";

import {
    Container,
    Left,
    CardItem,
    Card,
    Content,
    Header,
    ListItem,
    Body,
    Text,
    Title,
    Button,
    Thumbnail
} from 'native-base';

import {
    ContentResponse,
    TitleResponse,
    HeaderResponse,
    ContenDatailsResponse,
    TextDetail,
    LinkBoleto,
    ContenResponseButton,
} from './styles'

import Icon from 'react-native-vector-icons/FontAwesome5';
import api from '../../services/api';
import SwipeablePanel from 'rn-swipeable-panel';

import Load from '../../components/loader';
import {ButtonText} from "../singUp/styles";

const Checkout = ({navigation}) => {

    const [data, setData] = useState(navigation.getParam('data'));
    const [swipeablePanelActive, setSwip] = useState(false);
    const [loading, setLoading] = useState(false);


    const componentDidMount = () => {
        this.openPanel();
    };

    const openPanel = () => {
        setSwip(true);
    };

    const closePanel = () => {
        navigation.goBack(null)
        setSwip(false);
    };

    const boletoGeneration = async () => {
        setLoading(true);

        const itens = {
            id_comprador: "CUS-FH8D1Q2VZ9JV",
            // valor: data.price - data.descount,
            // preco: data.price,
            // quantidade: 1,
            // descricao: data.title,
            // detalhes: data.content
        };

        console.log(itens)


        try {
            const response = await api.post('/new-request', itens);
            const data_server = response.data;

            // navigation.navigate('Cart', {id_pedido: data_server.id_pedido});

            // {data_server.status === false ? navigation.navigate('Cartoes') : setForm({...form, error_server: data_server.message})}
            setLoading(false);
            setSwip(true)
        } catch (err) {
            setLoading(false);
        }
    };

    const Swipeable = () => (

        <SwipeablePanel
            fullWidth
            isActive={swipeablePanelActive}
            onClose={closePanel}
            onPressCloseButton={closePanel}
        >
            <ContentResponse>
                <HeaderResponse>
                    <Icon name={'check'} color={'green'} size={30}/>
                    <TitleResponse>Boleto gerado com secesso!</TitleResponse>
                </HeaderResponse>
                <ContenDatailsResponse>
                    <TextDetail> Acesse o link para baixar o boleto:</TextDetail>
                    <LinkBoleto>https://www.youtube.com/watch?v=9rQlL3DdoA4</LinkBoleto>
                </ContenDatailsResponse>
                <ContenResponseButton>
                    <Button style={{width: '100%', justifyContent: 'center'}}
                            onPress={() => boletoGeneration()}>
                        <Text>Enviar link</Text>
                    </Button>
                </ContenResponseButton>
            </ContentResponse>
        </SwipeablePanel>
    );

    return (
        <Container>

            <Content>
                <Card style={{margin: 10, height: '100%'}}>
                    <CardItem
                        style={{justifyContent: 'center', alignItems: 'center', height: 150, flexDirection: 'column'}}>
                        <Thumbnail
                            style={{width: 150, height: 100}}
                            source={{uri: data.image_url}}/>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>
                            {data.title}
                        </Text>
                    </CardItem>
                    <CardItem style={{borderTopWidth: 0.3}}>
                        <Text>{data.content}</Text>
                    </CardItem>
                    <CardItem style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        borderTopWidth: 0.3
                    }}>
                        <Text>De: R$ {data.price}</Text>
                        <Text>Por: R$ {data.price - data.descount}</Text>
                    </CardItem>
                    <CardItem style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        borderTopWidth: 0.3
                    }}>

                    </CardItem>
                    <CardItem style={{marginTop: 20}}>

                        <Button style={{width: '100%', justifyContent: 'center', backgroundColor: '#4CB1F7'}}
                                onPress={() => boletoGeneration()}>
                            <Text>Gerar boleto</Text>
                        </Button>
                    </CardItem>
                </Card>
            </Content>
            <Swipeable/>
            {loading ? <Load/> : null}
        </Container>
    );
};

export default Checkout;
