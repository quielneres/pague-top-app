import React, {useState} from 'react';


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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../services/api';
import {validateAll} from "indicative/validator";


const Checkout = ({navigation}) => {

    const [data, setData] = useState(navigation.getParam('data'));

    const makeRequest = async () => {

        const itens = {
            id_comprador: "CUS-FH8D1Q2VZ9JV",
            valor: data.price - data.descount,
            preco:  data.price,
            quantidade: 1,
            descricao: data.title,
            detalhes: data.content
        };

        console.log(itens)


        try {
            const response = await api.post('/new-request', data);
            const data_server = response.data;

            navigation.navigate('Cart', {id_pedido: data_server.id_pedido});

            // {data_server.status === false ? navigation.navigate('Cartoes') : setForm({...form, error_server: data_server.message})}

        } catch (err) {

        }
    };

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
                        <Text style={{fontWeight: 'bold'}}>Dados de pagamento</Text>
                        <CardItem style={{backgroundColor: '#EBEFF2', width: '100%', marginTop: 10}}>
                            <Icon name={'credit-card'} size={30}/>
                            <Text style={{padding: 10,}}>1123 **** **** 9876</Text>
                        </CardItem>

                    </CardItem>
                    <CardItem style={{marginTop: 20}}>

                        <Button style={{width: '100%', justifyContent: 'center'}}
                        onPress={() => navigation.navigate('Cart',  {id_pedido: 'ORD-8P8BHFSYDM1V'})}>
                            <Text>Carrinho</Text>
                        </Button>
                        {/*<Button style={{width: '100%', justifyContent: 'center'}}*/}
                        {/*onPress={() => makeRequest()}>*/}
                            {/*<Text>Finalizar Pedido</Text>*/}
                        {/*</Button>*/}
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
};

export default Checkout;
