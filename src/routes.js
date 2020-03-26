// App.js
// obrigado a leitura
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Example from './pages/Example';
import AuthStack from './pages/auth';
import AppModalStack from './pages/home';

const FeedStack = createStackNavigator({
    Feed: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Feed',
        },
    },
    Details: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Details',
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
    Details: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },
});

const DiscoverStack = createStackNavigator({
    Discover: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Discover',
        },
    },
    Details: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },
});

const MainTabs = createBottomTabNavigator({
    Feed: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Feed',
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
});


export default MainDrawer;
