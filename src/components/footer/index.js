import React from 'react';

import Styles from './styles';

import {Footer,Button, Icon, FooterTab, Text} from "native-base";

const FooterContent = ({navigation}) => {
    return (
        <Footer>
            <FooterTab style={Styles.footerBar}>
                <Button vertical onPress={() => navigation.navigate('Home')}>
                    <Icon name="home"/>
                    <Text >Home</Text>
                </Button>
                <Button vertical>
                    <Icon name="camera" />
                    <Text>Pagar</Text>
                </Button>
                <Button vertical>
                    <Icon active name="navigate" />
                    <Text>Cobrar</Text>
                </Button>
                <Button vertical  onPress={() => navigation.navigate('Perfil')}>
                    <Icon name="settings" />
                    <Text>Confg</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
};

export default FooterContent;
