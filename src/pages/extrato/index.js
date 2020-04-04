import React from 'react';

import {Container, Header, Content, Tab, Tabs, Footer, FooterTab, Button, Icon, Text} from 'native-base';
import Disponivel from './estatus/disponivel';
import Liberar from './estatus/liberar';
import Bloqueado from './estatus/liberar';
import FooterContent from "../home";
import Styles from "../../components/footer/styles";

export default class Perfil extends React.Component {

    render() {
        return (
            <Container>
                {/*<Header hasTabs />*/}
                <Content>
                    <Tabs>
                        <Tab heading="Disponivel">
                            <Disponivel/>
                        </Tab>
                        <Tab heading="A liberar">
                            <Liberar/>
                        </Tab>
                        <Tab heading="Bloqueado">
                            <Bloqueado/>
                        </Tab>
                    </Tabs>
                </Content>
                <Footer>
                    <FooterTab style={{backgroundColor: '#F2F2F2'}}>
                        <Button vertical onPress={() => this.props.navigation.navigate('Home')}>
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
                        <Button vertical  onPress={() => this.props.navigation.navigate('Perfil')}>
                            <Icon name="settings" />
                            <Text>Confg</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

