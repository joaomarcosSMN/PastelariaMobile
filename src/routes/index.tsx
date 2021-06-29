import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import {Splash} from '../components/Splash';

import {useAuth} from '../context/auth';

const Routes = () => {
    const {isLoading, signed} = useAuth();

    if (isLoading) {
        return <Splash />;
    }
    return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
