import React, {useState,useRef} from 'react';
import {
  View,
  Dimensions,
  FlatList,
  TextInput,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';

let width = Dimensions.get('window').width;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Helllo',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Helllo',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Helllo',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Helllo',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    title: 'Helllo',
  },
];

const ChatScreen = () => {
  const scrollView = useRef(null);
  const [selectedId, setSelectedId] = useState(null);
  const [text, setText] = useState('');

  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => setSelectedId(item.id)}
          style={[styles.item]}>
          <Text style={[styles.title]}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const rightRenderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => setSelectedId(item.id)}
          style={[styles.rightItem]}>
          <Text style={[styles.title]}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'always'}>
      <ScrollView
        ref={scrollView}
        onContentSizeChange={() =>
          scrollView.current.scrollToEnd({animated: true})
        }
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
          <FlatList
            data={DATA}
            renderItem={rightRenderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
        </View>
      </ScrollView>
      <View style={styles.input}>
        <TextInput
          style={{
            // backgroundColor: 'red',
            width: width - 50,
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
          onChangeText={text => {
            setText(text);
          }}
          value={text}
        />
        <TouchableOpacity onPress={() => console.log(text)}>
          <Icon name="paper-plane" size={23} style={{marginLeft: 10}} />
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#54c7ecad',
    borderRadius: 5,
    width: Dimensions.get('window').width / 2,
    height: 30,
    alignSelf: 'flex-end',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  rightItem: {
    backgroundColor: '#54c7ecad',
    borderRadius: 5,
    width: Dimensions.get('window').width / 2,
    height: 30,
    alignSelf: 'flex-start',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
  },
  input: {
    marginTop: Dimensions.get('window').height * 0.2,
    // position: 'relative',
    // justifyContent: 'center',
    marginLeft: 5,
    width: width - 50,
    borderRadius: 20,
    flexDirection: 'row',
    // paddingBottom: 20,
    borderWidth: 1,
  },
});

export default ChatScreen;
