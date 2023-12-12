import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  TextInput,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  const [pencarian, setpencarian] = useState('');

  return (
    <Animated.View style={header.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#D0E7D2'} />
      <Text style={header.text}>
        Gardener
        <Text style={{color: '#79AC78'}}>Helper</Text>
        <Image
          style={{
            width: 45,
            height: 45,
            position: 'absolute',
          }}
          source={{
            uri: 'https://i.pinimg.com/736x/6e/07/a4/6e07a43af36e1ab6a1cd6fb4c11cf234.jpg',
          }}
        />
      </Text>
      <View style={{flexDirection: 'row'}}>
        {/* text input pencarian */}
        <TextInput
          color="#000000"
          value={pencarian}
          onChangeText={text => setpencarian(text)}
          placeholder="Cari Informasi Tanaman Anda ?"
          placeholderTextColor="#000000"
          style={header.textinput}
        />
        <TouchableOpacity style={header.logosearch} onPress={() => {}}>
          <View>
            {/* ikon cari */}
            <Icon name="search" size={25} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default Header;

const header = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textinput: {
    backgroundColor: '#FFFF',
    elevation: 3,
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 15,
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  logosearch: {
    justifyContent: 'center',
    backgroundColor: '#79AC78',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginLeft: 10,
  },
});
