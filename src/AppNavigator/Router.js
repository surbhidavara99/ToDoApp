import React, {Component, useState, useEffect} from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeSceen';
import ChatScreen from '../Screens/ChatScreen';
import {Button, Image, TouchableOpacity} from 'react-native';
// import CustomSidebarMenu from '../src/screens/CustomSidebarMenu';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from '../Screens/LoginScreen';
import CustomSidebarMenu from '../Screens/CustomSideMenu';
import {resetRoute} from '../Utils/navigationUtils';
import SplashScreen from '../Screens/SplashScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'id-badge' : 'id-badge';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        iconStyle: {top: 10},

        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#222222',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 17,
          fontWeight: 'bold',
          top: 10,
          borderBottomColor: 'tomato',
          borderRadius: 20,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

function ProfileStack({}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="proflescreen"
        options={{
          headerShown: false,
        }}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
}
function Home({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homescreen"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}
function DrawerHome() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerPosition: 'left'}}
      drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen name="Home" component={TabStack} />
    </Drawer.Navigator>
  );
}
function SignIn() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="login"
        options={{headerShown: false}}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}

const RouteApp = props => {
  // useEffect(() => {
  //   props.hashToken
  //     ? resetRoute(props.navigation, 'Home')
  //     : resetRoute(props.navigation, 'Login');
  // }, []);

  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={DrawerHome} />
      </Stack.Navigator>
      {/* {props.hashToken == null ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={DrawerHome} />
        </Stack.Navigator>
      )} */}
    </>
  );
};

export default RouteApp;
