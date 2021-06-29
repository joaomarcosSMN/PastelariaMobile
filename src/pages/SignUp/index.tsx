import React from 'react';
import {StyleSheet, Button, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import {useAuth} from '../../context/auth';

const SignUp = () => {
    const {signUp} = useAuth();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Button title='Cadastre-se' onPress={() => signUp()} />
            <Button title='Voltar' onPress={() => navigation.goBack()} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SignUp;
