import React, {useEffect} from 'react';

import {View, AsyncStorage, ActivityIndicator} from 'react-native';

import Load from '../components/loader'

export default function AuthLoadingScreen(props) {
  useEffect(() => {
    async function handleUserNextScreen() {
      const userToken = await AsyncStorage.getItem('@ListApp:userToken');

      props.navigation.navigate(userToken ? 'App' : 'Auth');
    }

    handleUserNextScreen();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/*<ActivityIndicator size="large" color="#00ff00" />*/}
      <Load/>
    </View>
  );
}

AuthLoadingScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
