import React from 'react';
import {createAppContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ChatScreen from '../Screens/ChatScreen';
import HomeScreen from '../Screens/HomeSceen';
import BottomTab from './BottomTabs';
import ProfileScreen from '../Screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({navigation}) {
  return (
    <Button
      title="Go somewhere"
      // onPress={() => {
      //   // Navigate using the `navigation` prop that you received
      //   navigation.navigate('Home');
      // }}
    />
  );
}

function DrawerContent() {
  return (
    <Drawer.Navigator dra>
      <Drawer.Screen name="Tabs" component={BottomTab} />
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon name="home" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon name="user" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerContent;
