import React from 'react';

import {Container, Header, Content, Tab, Tabs, Footer, FooterTab, Button, Icon, Text} from 'native-base';

export default class Perfil extends React.Component {


    render() {
        return (
            <Container>
                <Content>
                    <Text>Perfil</Text>
                </Content>
                <Footer>
                    <FooterTab style={{backgroundColor: '#F2F2F2'}}>
                        <Button vertical onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name="home"/>
                            <Text>Home</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera"/>
                            <Text>Pagar</Text>
                        </Button>
                        <Button vertical>
                            <Icon active name="navigate"/>
                            <Text>Cobrar</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate('Perfil')}>
                            <Icon name="settings"/>
                            <Text>Confg</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

