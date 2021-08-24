import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
import SplashScreen from 'react-native-splash-screen';
import RouteApp from './src/AppNavigator/Router';

const Tab = createBottomTabNavigator();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <NavigationContainer>
        <RouteApp />
      </NavigationContainer>
    </>
  );
};

export default App;
