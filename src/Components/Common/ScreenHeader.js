import * as React from 'react';
import {Button, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CommonSceeenHeader = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#FFFF',
        width: Dimensions.get('window').width - 40,
        alignItems: 'flex-start',
        alignSelf: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="bars" size={25} color="grey" />
      </TouchableOpacity>
    </View>
  );
};

export default CommonSceeenHeader;
