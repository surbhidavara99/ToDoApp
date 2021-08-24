import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {resetRoute} from '../Utils/navigationUtils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    async function getAuthToken() {
      let __syncToken = await AsyncStorage.getItem('RefreshToken');
      __syncToken == null
        ? resetRoute(navigation, 'Login')
        : resetRoute(navigation, 'Home');
    }

    getAuthToken();
  }, []);
  return (
    <>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image
          source={require('./../Assets/Images/logo.jpeg')}
          style={{height: 128, width: 128, alignSelf: 'center'}}
        />
      </View>
    </>
  );
};

export default SplashScreen;
