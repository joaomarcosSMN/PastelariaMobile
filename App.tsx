import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Splash} from './src/components/Splash';
import Routes from './src/routes';
import {AuthProvider} from './src/context/auth';

const App = () => {
    return (
        <>
            <AuthProvider>
                <NavigationContainer>
                    <Routes />
                </NavigationContainer>
            </AuthProvider>
        </>
    );
};

export default App;
