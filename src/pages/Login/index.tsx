import React from 'react';
import {StyleSheet, Button, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../context/auth';

const Login = () => {
    const {signIn} = useAuth();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Button title='Entre' onPress={() => signIn()} />
            <Button
                title='Cadastre-se'
                onPress={() => navigation.navigate('SignUp')}
            />
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

export default Login;
