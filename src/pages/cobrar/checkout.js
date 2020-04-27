import React, {useEffect, useState} from 'react';

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
const ls = require('react-native-local-storage');
import Load from '../../components/loader';
import {ButtonText} from "../singUp/styles";

const Checkout = ({navigation}) => {

    const [data, setData] = useState(navigation.getParam('data'));
    const [swipeablePanelActive, setSwip] = useState(false);
    const [loading, setLoading] = useState(false);

    const [status_server, setStatusServer] = useState(false);
    const [user, setUser] = useState([]);
    const [link, setLink] = useState(null);

    useEffect(() => {
        ls.get('@ListApp:userToken').then(data => {
            setUser(data.user ?? [])
        })

    }, []);

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
            id_comprador: user.id_comprador,
            valor: data.price,
            preco: data.price,
            quantidade: 1,
            descricao: data.title,
            detalhes: data.content,
            payment_method: 1,
            cell_number: '',
            operadora_name: ''

        };

        try {
            const response = await api.post('/new-request', itens);
            const data_server = response.data;
            console.log(data_server)
            {
                data_server.status === false ? setStatusServer(false) : setStatusServer(true)
            }

            {
                data_server.status === true ? setLink(data_server.link_boleto): null
            }

            setLoading(false);
            setSwip(true)
        } catch (err) {
            console.log(err)
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
                    {status_server
                        ?
                        <View style={{alignItems: 'center'}}>
                            <Icon name={'grin'} color={'green'} size={30}/>
                            <TitleResponse style={{color: 'green'}}> Boleto gerado com secesso!</TitleResponse>
                        </View>
                        :
                        <View style={{alignItems: 'center'}}>
                            <Icon name={'frown'} color={'red'} size={30}/>
                            <TitleResponse style={{color: 'red'}}> Erro em sua solicitacao!</TitleResponse>
                        </View>
                    }
                </HeaderResponse>
                {status_server
                    ?
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <ContenDatailsResponse>
                            <TextDetail> Acesse o link para baixar o boleto:</TextDetail>
                            <LinkBoleto style={{alignItems: 'center', justifyContent: 'center'}}>{link}</LinkBoleto>
                        </ContenDatailsResponse>
                        <ContenResponseButton>
                            <Button style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}
                                    onPress={() => navigation.goBack(null)}>
                                <Text  style={{alignItems: 'center', justifyContent: 'center'}}>Enviar link</Text>
                            </Button>
                        </ContenResponseButton>
                    </View>
                    : <ContenResponseButton>
                        <Button style={{width: '100%', justifyContent: 'center', borderEndColor: 'red'}}
                                onPress={() => navigation.goBack(null)}>
                            <Text>Fechar</Text>
                        </Button>
                    </ContenResponseButton>
                }
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
