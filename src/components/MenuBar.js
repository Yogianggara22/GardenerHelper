import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuBar = () => {
  return (
    <View style={menubar.menu}>
      <TouchableOpacity style={menubar.icon}>
        <Icon name="home" size={25} color="#5B8A72" />
        <Text style={menubar.Text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={menubar.icon}>
        <Icon name="calendar" size={25} color="#515E63" />
        <Text style={menubar.Text}>Schedule</Text>
      </TouchableOpacity>
      <TouchableOpacity style={menubar.icon}>
        <Icon name="rose" size={25} color="#515E63" />
        <Text style={menubar.Text}>Garden</Text>
      </TouchableOpacity>
      <TouchableOpacity style={menubar.icon}>
        <Icon name="person" size={25} color="#515E63" />
        <Text style={menubar.Text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuBar;

const menubar = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    backgroundColor: '#F5FFFA',
    elevation: 3,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 5,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 12,
    color: 'black',
  },
});
