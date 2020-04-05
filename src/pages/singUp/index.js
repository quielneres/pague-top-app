import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

import {Container, Card, Content, Form, Item, Input, Label} from 'native-base';

const SingUp = ({navigation}) => {
    return (
        <Container>
            <Content style={styles.content}>
                <Card style={styles.card} transparent>
                    <Form style={styles.form}>
                        <View style={styles.item}>
                            <Label style={styles.label}>Nome</Label>
                            <Input style={styles.input}/>
                        </View>
                        <View style={styles.item}>
                            <Label style={styles.label}>CPF</Label>
                            <Input style={styles.input}/>
                        </View>
                        <View style={styles.item}>
                            <Label style={styles.label}>E-mail</Label>
                            <Input style={styles.input}/>
                        </View>
                        <View style={styles.item}>
                            <Label style={styles.label}>Telefone</Label>
                            <Input style={styles.input}/>
                        </View>
                        <View style={styles.item}>
                            <Label style={styles.label}>Cnpj</Label>
                            <Input style={styles.input}
                                placeholder={'Cpj'}
                            />
                        </View>
                    </Form>
                </Card>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    content: {
        // backgroundColor: '#4CB1F7'
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


