import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerContent from '../Router/DrawerContent';
import RouteApp from './../AppNavigator/Router';
Icon.loadFont();

const AppNavigation = () => {
  return (
    <>
      <RouteApp />
    </>
  );
};

export default AppNavigation;
