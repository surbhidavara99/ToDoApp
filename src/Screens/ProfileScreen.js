import * as React from 'react';
import {
  Button,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import CommonSceeenHeader from '../Components/Common/ScreenHeader';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ProfileScreen = props => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'#FFFF'}}>
      <CommonSceeenHeader {...props} />

      <ImageBackground
        style={{width: Width}}
        source={require('../Assets/Images/bgImage.jpeg')}>
        <View style={{marginTop: 30, alignSelf: 'center'}}>
          <Image
            source={require('../Assets/Images/roundImage.jpeg')}
            style={{width: 150, height: 150, borderRadius: 70}}
          />
        </View>
        <View
          style={{
            // backgroundColor: 'red',
            // marginTop: 50,
            alignSelf: 'center',
            width: Width - 70,
          }}>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
            RYAN SCHILDER
          </Text>
          <Text style={{textAlign: 'center', fontSize: 15}}>Photographer</Text>
        </View>
        <View
          style={{
            // backgroundColor: 'red',
            marginTop: 90,
            alignSelf: 'center',
            width: Width - 70,
          }}>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
            About Me
          </Text>
          <Text style={{textAlign: 'center', fontSize: 15, marginTop: 30}}>
            You might want to save the user's location in the app, so that they
            are immediately returned to the same location after the app is
            restarted. This is especially valuable during development because it
            allows the developer to stay on the same screen when they refresh
            the app.
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProfileScreen;
