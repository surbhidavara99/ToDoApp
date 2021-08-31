import React, {createRef, useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  StyleSheet,
  Pressable,
  TextInput,
} from 'react-native';
import {height, width} from '../Components/Common/Dimension';
import {CONTINUE_EMAIL_COLOR} from './../Config/colors/index';
import EmailScreenModal from './Modals/EmailModal';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const LoginScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  const emailModalClose = () => {
    setModalVisible(false);
    setSignupModal(true);
  };

  return (
  
      <SafeAreaView style={{backgroundColor: '#FFFF', flex: 1}} testID={"welcome"}>
        <View style={{alignSelf: 'center', marginTop: 20}}>
          <Image
            source={require('../Assets/Images/logo.jpeg')}
            style={{width: 45, height: 45}}
          />
        </View>
        <View
          style={{
            width: width - 40,
            height: 30,
            alignSelf: 'center',
            marginTop: 15,
          }}>
          <Text style={{alignSelf: 'center', fontSize: 25}}>
            Welcome to Todoist
          </Text>
        </View>
        <View style={{alignSelf: 'center', marginTop: 20}}>
          <Image
            source={require('../Assets/Images/splashBG.png')}
            style={{width: width, height: height * 0.5}}
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            marginTop: 20,
            width: width - 40,
            height: height * 0.05,
            backgroundColor: '#CB5748',
          }}>
          <Button
            title="Continue with Email"
            color="#FFFF"
            onPress={() => {
              setModalVisible(true);
            }}></Button>
        </View>
        <View
          style={{
            alignSelf: 'center',
            marginTop: 20,
            width: width - 40,
            height: height * 0.05,
            backgroundColor: '#000000',
          }}>
          <Button title="Continue with Apple" color="#FFFF"></Button>
        </View>
        <View
          style={{
            width: width - 40,
            flexDirection: 'row',
            marginTop: 20,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: width / 2 - 40,
              marginHorizontal: 10,
            }}>
            <TouchableOpacity
            testID='btngoogleLogin'
              style={{borderColor: '#dedede', borderWidth: 2}}
              onPress={() =>
                onGoogleButtonPress().then(data => {
                  if (data) {
                    AsyncStorage.setItem(
                      'RefreshToken',
                      data.user._user.refreshToken,
                    );
                    navigation.navigate('Home', {screen: 'homescreen'});
                  }
                })
              }>
              <Image
                source={require('../Assets/Images/google.png')}
                style={{width: 37, height: 37, alignSelf: 'center'}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width / 2 - 40,
              marginHorizontal: 10,
            }}>
            <TouchableOpacity style={{borderColor: '#dedede', borderWidth: 2}}>
              <Image
                source={require('../Assets/Images/facebook.jpeg')}
                style={{width: 37, height: 37, alignSelf: 'center'}}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Email-Modal */}

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <View style={styles.modalView}>
                <View style={{width: width, marginTop: 20}}>
                  <Pressable
                    onPress={() => setModalVisible(false)}
                    style={{
                      marginHorizontal: 12,
                    }}>
                    <Text style={styles.modalText}>Close</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    marginTop: 25,
                    width: width,
                    marginHorizontal: 12,
                  }}>
                  <Text style={styles.emailText}>
                    What's your email address?
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 80,
                    width: width,
                    marginHorizontal: 12,
                  }}>
                  <Text style={styles.emailLabelText}>Your Email</Text>
                </View>
                <View style={{width: width}}>
                  <TextInput style={styles.emailInput} placeholder="   Email" />
                </View>
                <View
                  style={{
                    width: width - 40,
                    backgroundColor: CONTINUE_EMAIL_COLOR,
                    marginTop: 20,
                    alignSelf: 'center',
                  }}>
                  <Button
                    title="Continue with email"
                    color="#FFFF"
                    onPress={emailModalClose}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>

        {/* Sign-up Modal */}
        <EmailScreenModal
          visible={signupModal}
          onPressOpen={() => setSignupModal(false)}
        />

        {/* <View style={[styles.centeredView, {backgroundColor: 'red'}]}>
          <Modal animationType="slide" transparent={true} visible={signupModal}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
              }}>
              <View style={[styles.modalView, {flex: 1}]}>
                <View style={{width: width, marginTop: 20}}>
                  <Pressable
                    onPress={() => setSignupModal(false)}
                    style={{
                      marginHorizontal: 12,
                    }}>
                    <Text style={styles.modalText}>Sign up</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    marginTop: 25,
                    width: width,
                    marginHorizontal: 12,
                  }}>
                  <Text style={styles.emailText}>
                    What's your email address?
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 80,
                    width: width,
                    marginHorizontal: 12,
                  }}>
                  <Text style={styles.emailLabelText}>Your Email</Text>
                </View>
                <View style={{width: width}}>
                  <TextInput style={styles.emailInput} placeholder="   Email" />
                </View>
                <View
                  style={{
                    width: width - 40,
                    backgroundColor: CONTINUE_EMAIL_COLOR,
                    marginTop: 20,
                    alignSelf: 'center',
                  }}>
                  <Button title="Continue with email" color="#FFFF" />
                </View>
              </View>
            </View>
          </Modal>
        </View> */}
      </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  innerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 100,
  },
  modalView: {
    flex: 0.9,
    width: width,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 35,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontWeight: 'bold',
    color: '#E2B0AC',
    alignSelf: 'flex-start',
    fontSize: 18,
    textAlign: 'center',
  },
  emailText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  emailLabelText: {
    fontSize: 15,
  },
  emailInput: {
    height: 40,
    marginTop: 7,
    borderWidth: 2,
    borderColor: '#F3F3F3',
  },
});

export default LoginScreen;
