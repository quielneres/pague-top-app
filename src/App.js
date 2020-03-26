// App.js
// obrigado a leitura
import React, {useEffect} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Example from './pages/Example';
import Home from './pages/home';
import Login from './pages/Welcome';
import Sair from './pages/singUp/index';
import Detalhes from './pages/home/detalhes';

import AuthLoadingScreen from './pages/AuthLoadingScreen';

const AuthStack = createStackNavigator({
    Landing: {
        screen: Login,
        navigationOptions: {
            headerTitle: 'Landing',
        },
    },
    SignIn: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Sign In',
        },
    },
    CreateAccount: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Create Account',
        },
    },
    ForgotPassword: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Forgot Password',
        },
    },
    ResetPassword: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Reset Password',
        },
    },
    App: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Bem vindo',
        },
    },
});

const FeedStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Details: {
        screen: Detalhes,
        navigationOptions: {
            headerTitle: 'Detalhes',
        },
    },
});

const SearchStack = createStackNavigator({
    Search: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Search',
        },
    },
    // Details: {
    //     screen: Example,
    //     navigationOptions: {
    //         headerTitle: 'Details',
    //     },
    // },
});

const DiscoverStack = createStackNavigator({
    Discover: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Discover',
        },
    },
    // Details: {
    //     screen: Detalhes,
    //     navigationOptions: {
    //         headerTitle: 'Detalhes',
    //     },
    // },
});

const MainTabs = createBottomTabNavigator({
    Feed: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Home',
        },
    },
    Search: {
        screen: SearchStack,
        navigationOptions: {
            tabBarLabel: 'Search',
        },
    },
    Discover: {
        screen: DiscoverStack,
        navigationOptions: {
            tabBarLabel: 'Discover',
        },
    },
});

const SettingsStack = createStackNavigator({
    SettingsList: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Settings List',
        },
    },
    Profile: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Profile',
        },
    },
});

const MainDrawer = createDrawerNavigator({
    MainTabs: MainTabs,
    Settings: SettingsStack,
    Teste: {
        screen: Sair,
        navigationOptions: {
            headerTitle: 'Profile',
        },
    },

});

const AppModalStack = createStackNavigator(
    {
        App: MainDrawer,
        Promotion1: {
            screen: Example,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
);

const App = createSwitchNavigator({
    Loading: {
        screen: AuthLoadingScreen,
    },
    Auth: {
        screen: AuthStack,
    },
    App: {
        screen: AppModalStack,
    },
});

export default createAppContainer(App);
