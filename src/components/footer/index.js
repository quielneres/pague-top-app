import React from 'react';

import Styles from './styles';

import {Footer,Button,  FooterTab, Text} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';


const FooterContent = ({navigation}) => {
    return (
        <Footer>
            <FooterTab style={Styles.footerBar}>
                <Button vertical onPress={() => navigation.navigate('Home')}>
                    <Icon active name="home" size={20}/>
                    <Text >Home</Text>
                </Button>
                <Button vertical>
                    <Icon name="camera"  size={20}/>
                    <Text>Pagar</Text>
                </Button>
                <Button vertical>
                    <Icon active name="money"  size={20}/>
                    <Text>Cobrar</Text>
                </Button>
                <Button vertical  onPress={() => navigation.navigate('Perfil')}>
                    <Icon name="user"  size={20}/>
                    <Text>Confg</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
};

export default FooterContent;
