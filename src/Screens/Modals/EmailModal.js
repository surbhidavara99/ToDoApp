import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  Text,
  View,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native';
import {width} from '../../Components/Common/Dimension';
import {CONTINUE_EMAIL_COLOR} from './../../Config/colors/index';
import Icon from 'react-native-vector-icons/FontAwesome';

const EmailScreenModal = props => {
  return (
    <View style={[styles.centeredView]}>
      <Modal animationType="slide" transparent={true} visible={props.visible}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <View style={[styles.modalView]}>
            <View style={{width: width, marginTop: 20}}>
              <Pressable
                onPress={() => props.onPressOpen()}
                style={{
                  marginHorizontal: 12,
                }}>
                <Icon
                  name="chevron-left"
                  size={18}
                  color={CONTINUE_EMAIL_COLOR}
                />
              </Pressable>
            </View>
            <View
              style={{
                marginTop: 15,
                width: width,
                marginHorizontal: 12,
              }}>
              <Text style={styles.emailText}>Sign up</Text>
            </View>
            <View
              style={{
                marginTop: 80,
                width: width,
                marginHorizontal: 12,
              }}>
              <Text style={styles.emailLabelText}>Your Name</Text>
            </View>
            <View style={{width: width}}>
              <TextInput style={styles.emailInput} placeholder="   Name" />
            </View>
            <View
              style={{
                marginTop: 20,
                width: width,
                marginHorizontal: 12,
              }}>
              <Text style={styles.emailLabelText}>Your Password</Text>
            </View>
            <View style={{width: width}}>
              <TextInput style={styles.emailInput} placeholder="   Password" />
            </View>
            <View
              style={{
                width: width - 40,
                backgroundColor: CONTINUE_EMAIL_COLOR,
                marginTop: 20,
                alignSelf: 'center',
              }}>
              <Button title="Signup" color="#FFFF" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
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
    backgroundColor: 'red',
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
export default EmailScreenModal;
