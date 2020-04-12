import React from 'react';

import Styles from './styles';

import {Footer,Button,  FooterTab, Text} from "native-base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const FooterContent = ({navigation}) => {
    return (
        <Footer>
            <FooterTab style={Styles.footerBar}>
                <Button vertical onPress={() => navigation.navigate('Home')}>
                    <Icon name="home" size={25}/>
                    <Text >Home</Text>
                </Button>
                <Button vertical>
                    <Icon name="camera"  size={25}/>
                    <Text>Pagar</Text>
                </Button>
                <Button vertical>
                    <Icon active name="navigate"  size={25}/>
                    <Text>Cobrar</Text>
                </Button>
                <Button vertical  onPress={() => navigation.navigate('Perfil')}>
                    <Icon name="settings"  size={25}/>
                    <Text>Confg</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
};

export default FooterContent;
