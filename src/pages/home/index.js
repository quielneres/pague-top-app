import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Styles from './Style';
import Valores from './Valores';
import ContaDigital from './ContaDigital';
import UltimasVendas from './UltimasVendas';

class Home extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <Valores />
                <ContaDigital />
                <View style={Styles.containerUltimasVendas}>
                    <Text style={Styles.tituloContainers}>Últimas Vedas </Text>
                </View>
                <UltimasVendas navigation={this.props.navigation} />
            </View>
        );
    }
}

export default Home;


