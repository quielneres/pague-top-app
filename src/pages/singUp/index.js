import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {Hoshi} from 'react-native-textinput-effects';


const SingUp = ({navigation}) => {

    const [nameUser, setName] = useState('');
    return (
        <View style={styles.content}>
            <Text>Register</Text>
            <Hoshi
                value={nameUser}
                onChangeText={name => setName(name)}
            />
        </View>
    )


}

const styles = StyleSheet.create({
    content: {
        // backgroundColor: '#4CB1F7'
        flex: 1
    },
    card: {
        padding: 15,
        margin: 0,
    },
    form: {
        padding: 0,
        margin: 0,
        // backgroundColor: '#4CB1F7'

    },
    item: {
        padding: 0,
        margin: 0,
        width: '100%',
        flexDirection: 'column',
        marginBottom: 15
    },
    label: {
        // color:  'white',
        width: '100%',
        fontWeight: 'bold'
    },
    input: {
        // backgroundColor: 'white',
        width: '100%',
        height: 45,
        borderWidth: 0.5,
        borderRadius: 7,
        borderColor: 'gray'
    }
});


export default SingUp;
