import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


import {deleteUser} from '../../utils';

class SingUp extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() =>
                    deleteUser().then(() => {
                        navigation.navigate('Loading');
                    })
                }
                style={{marginRight: 10}}>
                <Text>Sair</Text>
            </TouchableOpacity>
        );
    }
}

export default SingUp;


