import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Stack = createStackNavigator();

const AuthRoutes = () => (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
            name='Login'
            component={Login}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name='SignUp'
            component={SignUp}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
);

export default AuthRoutes;
