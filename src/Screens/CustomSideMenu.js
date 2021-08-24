import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Alert,
  Dimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions, CommonActions} from '@react-navigation/native';
import {resetRoute} from '../Utils/navigationUtils';

const width = Dimensions.get('window').width;
// const insets = useSafeArea();

const CustomSidebarMenu = ({props, navigation}) => {
  console.log('navigation', navigation);
  function confirmLogout() {
    Alert.alert('Are you sure want to logg out?', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Ok ',
        onPress: () => removeAuthToken(),
      },
    ]);
  }

  const removeAuthToken = () => {
    AsyncStorage.removeItem('RefreshToken');
    // Alert.alert('Logout successfully!!');
    resetRoute(navigation, 'Login');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignContent: 'center',
        }}>
        <Icon
          name="envelope"
          size={20}
          color="grey"
          style={styles.sideMenuProfileIcon}
        />

        <Text style={styles.sideMenuText}>Message App</Text>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          paddingTop: 20,
          flex: 1,
        }}>
        <DrawerItem
          icon={({tintColor}) => (
            <Icon
              color="grey"
              name="home"
              size={20}
              style={styles.DrawerMenuIcon}
            />
          )}
          label="Home"
          labelStyle={styles.drawerMenuText}
          onPress={() => navigation.navigate('homescreen')}
        />

        <DrawerItem
          icon={({tintColor}) => (
            <Icon color="grey" name="envelope-square" size={20} />
          )}
          label="Latest News"
          labelStyle={styles.drawerMenuText}
        />
        <DrawerItem
          icon={({tintColor}) => <Icon color="grey" name="heart" size={20} />}
          label="Favourite"
          labelStyle={styles.drawerMenuText}
        />
        <DrawerItem
          icon={({tintColor}) => (
            <Icon color="grey" name="user-circle" size={20} />
          )}
          label="Profile"
          labelStyle={styles.drawerMenuText}
          onPress={() => navigation.navigate('profilescreen')}
        />
        <DrawerItem
          icon={({tintColor}) => (
            <Icon
              color="grey"
              name="sign-out"
              size={20}
              onPress={() => console.log('kxscc')}
            />
          )}
          label="Logout"
          labelStyle={styles.drawerMenuText}
          onPress={confirmLogout}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    width: 40,
    marginTop: 5,
    marginLeft: 10,
  },
  DrawerMenuIcon: {width: 22, height: 22},
  drawerMenuText: {
    fontSize: 20,
  },
  sideMenuText: {
    width: width / 2,
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 5,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
