import * as React from 'react';
import {Button, Dimensions, SafeAreaView, Text, View} from 'react-native';
import CommonSceeenHeader from '../Components/Common/ScreenHeader';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

GoogleSignin.configure({
  webClientId: '',
});

async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
const HomeScreen = props => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#FFFF', flex: 1}}>
        <CommonSceeenHeader {...props} />
        <View
          style={{
            backgroundColor: 'pink',
            marginTop: 30,
            width: Dimensions.get('window').width - 60,
            alignSelf: 'center',
          }}></View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
