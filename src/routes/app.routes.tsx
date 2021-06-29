import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserView from '../pages/UserView';
import UserCreate from '../pages/UserCreate';
import TaskViewAll from '../pages/TaskViewAll';
import TaskCreate from '../pages/TaskCreate';
import TeamHome from '../pages/TeamHome';
import TaskHome from '../pages/TaskHome';

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const EquipeDrawer = () => (
    <Drawer.Navigator initialRouteName='TeamHome'>
        <Drawer.Screen name='TeamHome' component={TeamHome}></Drawer.Screen>
        <Drawer.Screen name='UserView' component={UserView}></Drawer.Screen>
        <Drawer.Screen name='UserCreate' component={UserCreate}></Drawer.Screen>
    </Drawer.Navigator>
);

const TarefaDrawer = () => (
    <Drawer.Navigator initialRouteName='TaskHome'>
        <Drawer.Screen name='TaskHome' component={TaskHome}></Drawer.Screen>
        <Drawer.Screen name='UserView' component={UserView}></Drawer.Screen>
        <Drawer.Screen
            name='TaskViewAll'
            component={TaskViewAll}></Drawer.Screen>
        <Drawer.Screen name='TaskCreate' component={TaskCreate}></Drawer.Screen>
    </Drawer.Navigator>
);

const AppRoutes = () => (
    <Tabs.Navigator initialRouteName='TarefaDrawer'>
        <Tabs.Screen name='TarefaDrawer' component={TarefaDrawer}></Tabs.Screen>
        <Tabs.Screen name='EquipeDrawer' component={EquipeDrawer}></Tabs.Screen>
    </Tabs.Navigator>
);

export default AppRoutes;
