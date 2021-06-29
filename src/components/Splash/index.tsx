import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

export function Splash() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Carregando...</Text>
        </SafeAreaView>
    );
}

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
