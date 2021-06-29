import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

const UserCreate = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Criar Usuário</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18
    }
});

export default UserCreate;
