import React from 'react';

import {Container, Header, Content, Tab, Tabs} from 'native-base';
import Disponivel from './estatus/disponivel';
import Liberar from './estatus/liberar';
import Bloqueado from './estatus/liberar';

export default class Perfil extends React.Component {

    render() {
        return (
            <Container>
                {/*<Header hasTabs />*/}
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
            </Container>
        );
    }
}

