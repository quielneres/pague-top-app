// App.js
// obrigado a leitura
import React, {useEffect} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Example from './pages/Example';
import Welcome from './pages/Welcome';
import Login from './pages/singIn';
import SingUp from './pages/singUp';
// import Sair from './pages/singUp/index';
import Home from './pages/home';
import CartDigital from './pages/carteiraDigital';
import ExtratoHome from './pages/extrato';
import Detalhes from './pages/home/detalhes';
import Perfil from './pages/perfil';
import SaqueHome from './pages/saque';
import CartoesHome from './pages/cartoes';
import TransferirHome from './pages/transferir';
import DescontosHome from './pages/descontos';
import PagarHome from './pages/pagar';
import CobrarHome from './pages/cobrar';
import CheckoutHome from './pages/cobrar/checkout';
import CartScreen from './pages/cobrar/cart';
import ProductHome from './pages/cobrar/produtos/ProductList';
import GerarBoletoHome from './pages/cobrar/gerarBoleto/gerarLinkBoleto';
import AddCardHome from './pages/cartoes/add/addCard';
import ClientCountHome from './pages/contaCilente';


import AuthLoadingScreen from './pages/AuthLoadingScreen';
import {deleteUser} from "./utils";

const AuthStack = createStackNavigator({
    Landing: {
        screen: Welcome,
        navigationOptions: {
            headerShown: false
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        },
    },
    SignIn: {
        screen: Example,
        navigationOptions: {
            headerTitle: 'Sign In',
        },
    },
    CreateAccount: {
        screen: SingUp,
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

// const HomeScreen = createStackNavigator({
// });


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
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    // Details: {
    //     screen: Detalhes,
    //     navigationOptions: {
    //         headerTitle: 'Detalhes',
    //     },
    // },
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

const CarteiraDigital = createStackNavigator({
    CarteiraDigital: {
        screen: CartDigital,
        navigationOptions: {
            headerTitle: 'Carteira Digital',
        },
    },
    Saque: {
        screen: SaqueHome,
        navigationOptions: {
            headerTitle: 'Saque',
        },
    },
    Transferir: {
        screen: TransferirHome,
        navigationOptions: {
            headerTitle: 'Transferir',
        },
    },
});
const Extrato = createStackNavigator({
    Extrato: {
        screen: ExtratoHome,
        navigationOptions: {
            headerTitle: 'Extrato',
        },
    }
});

const Profile = createStackNavigator({
    Perfil: {
        screen: Perfil,
        navigationOptions: {
            headerShown: false,
        },
    },
    ClientCount: {
        screen: ClientCountHome,
        navigationOptions: {
            headerTitleAlign: 'center',
            headerTitle: 'Conta Cliente'
        },
    }
});


const Cartoes = createStackNavigator({
    Cartoes: {
        screen: CartoesHome,
        navigationOptions: {
            headerTitle: 'Cartoes',
        },
    },
    AddCard: {
        screen: AddCardHome,
        navigationOptions: {
            headerTitle: 'Adicionar cartoes',
        },
    },
});

const Descontos = createStackNavigator({
    Descontos: {
        screen: DescontosHome,
        navigationOptions: {
            headerTitle: 'Descontos',
        },
    },
});

const Pagar = createStackNavigator({
    Pagar: {
        screen: PagarHome,
        navigationOptions: {
            headerTitle: 'Pagamentos',
        },
    },
});

const Cobrar = createStackNavigator({
    Cobrar: {
        screen: CobrarHome,
        navigationOptions: {
            headerTitle: 'Cobrar',
        },
    },
    ProductList: {
        screen: ProductHome,
        navigationOptions: {
            headerTitle: 'Lista de produtos',
        },
    },
    GerarBoleto: {
        screen: GerarBoletoHome,
        navigationOptions: {
            headerShown: false
        },
    },
    Checkout: {
        screen: CheckoutHome,
        navigationOptions: {
            headerTitle: 'Checkout',
            headerTitleAlign: 'center',
        },
    },
    Cart: {
        screen: CartScreen,
        navigationOptions: {
            headerTitle: 'Carrinho',
            headerTitleAlign: 'center',
        },
    },
});

const HomeScreen = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        },
    },
    Details: {
        screen: Detalhes,
        navigationOptions: {
            headerTitle: 'Detalhes',
        },
    },
});

const Sair = () => {
    deleteUser().then(() => {
        navigation.navigate('Loading');
    })
};

const MainDrawer = createDrawerNavigator({
    Home: HomeScreen,
    MainTabs: MainTabs,
    Carteira_Digital: CarteiraDigital,
    Extrato: Extrato,
    Cdigo_QRCode: Profile,
    Cartoes: Cartoes,
    Pagar: Pagar,
    Descontos: Descontos,
    Cobrar: Cobrar,
    Seu_negocia: Profile,
    Perfil: Profile,
    Ajuda: SettingsStack,
    Sair : Sair,

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
        navigationOptions: {
            headerShown: false
        },
    },
    Auth: {
        screen: AuthStack,
    },
    App: {
        screen: AppModalStack,
    },
});

export default createAppContainer(App);
