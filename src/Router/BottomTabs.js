import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './../Screens/HomeSceen';
import ChatScreen from './../Screens/ChatScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import DrawerContent from '../Router/DrawerContent';
Icon.loadFont();

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'comments' : 'comments';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTab;
