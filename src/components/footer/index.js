import React from 'react';

import Styles from './styles';

import {Footer, Button, FooterTab, Text} from "native-base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const FooterContent = ({navigation}) => {
    return (
        <Footer>
            <FooterTab style={Styles.footerBar}>
                <Button vertical onPress={() => navigation.navigate('Home')}>
                    <Icon active name="home" size={20}/>
                    <Text style={{color: '#252525'}}>Home</Text>
                </Button>
                <Button vertical onPress={() => navigation.navigate('Pagar')}>
                    <Icon name="cash-usd" size={20}/>
                    <Text style={{color: '#252525'}}>Pagar</Text>
                </Button>
                <Button vertical onPress={() => navigation.navigate('Cobrar')}>
                    <Icon active name="cash" size={20}/>
                    <Text style={{color: '#252525'}}>Cobrar</Text>
                </Button>
                <Button vertical onPress={() => navigation.navigate('Perfil')}>
                    <Icon name="account" size={20}/>
                    <Text style={{color: '#252525'}}>Perfil</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
};
export default FooterContent;
