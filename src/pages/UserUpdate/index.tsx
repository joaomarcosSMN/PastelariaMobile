import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

const UserUpdate = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Atualizar Usuário</Text>
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

export default UserUpdate;
