import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {ProfileData} from '../../Data';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="#212121" />
      <ImageBackground
        source={{
          uri: ProfileData.profilebackground,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        style={{flex: 0.5}}
        resizeMode={'cover'}>
        <View style={{flex: 0.5}}></View>
      </ImageBackground>
      <View style={{flex: 1}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri: ProfileData.profilePict,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            style={profile.poto}
          />
        </View>
        <View style={{marginTop: 60}}>
          <Text style={profile.nameprofile}>{ProfileData.name}</Text>
          <Text style={{textAlign: 'center', color: 'black'}}>
            Salam Berkebun !!!
          </Text>
          <TouchableOpacity style={profile.buttonEdit}>
            <Text style={profile.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <View style={{marginLeft: 80}}>
            <View style={profile.iconprofile} marginTop={20}>
              <View style={profile.icon}>
                <Icon name="call-outline" size={25} color="#212121" />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                <Text style={profile.textbio}>{ProfileData.no}</Text>
              </View>
            </View>
            <View style={profile.iconprofile}>
              <View style={profile.icon}>
                <Icon name="map-outline" size={25} color="#212121" />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                <Text style={profile.textbio}>{ProfileData.alamat}</Text>
              </View>
            </View>
            <View style={profile.iconprofile}>
              <View style={profile.icon}>
                <Icon name="mail-outline" size={25} color="#212121" />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, flex: 1}}>
                <Text style={profile.textbio}>{ProfileData.email}</Text>
              </View>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 40, marginHorizontal: 30}}>
            <TouchableOpacity style={profile.iconsosmed}>
              <Icon name="logo-facebook" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity style={profile.iconsosmed}>
              <Icon name="logo-instagram" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity style={profile.iconsosmed}>
              <Icon name="logo-github" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity style={profile.iconsosmed}>
              <Icon name="logo-linkedin" size={25} color="#bdbdbd" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
const profile = StyleSheet.create({
  poto: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    position: 'absolute',
    zIndex: 2,
  },
  iconprofile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  iconsosmed: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbio: {
    fontWeight: 'bold',
    color: 'black',
  },
  nameprofile: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#212121',
  },
  buttonEdit: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginLeft: 150,
    marginRight: 150,
    backgroundColor: '#bdbdbd',
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#000000',
  },
  buttonText: {
    fontSize: 14,
    color: '#000000',
  },
});
