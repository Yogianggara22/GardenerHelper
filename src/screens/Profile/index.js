import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Linking,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth().currentUser;
        if (user) {
          const userId = user.uid;
          const userDoc = await firestore()
            .collection('users')
            .doc(userId)
            .get();

          if (userDoc.exists) {
            setUserData(userDoc.data());
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      const user = auth().currentUser;
      if (user) {
        await auth().signOut();
        await AsyncStorage.removeItem('userData');
        navigation.replace('Login');
      } else {
        console.warn('No user is currently signed in.');
      }
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="#212121" />
      {userData?.photoUrl && (
        <ImageBackground
          source={{
            uri: userData?.photoUrl,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          style={{flex: 0.5}}
          resizeMode={'cover'}>
          <View style={{flex: 0.5}}></View>
        </ImageBackground>
      )}
      <View style={{flex: 1}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {userData?.photoUrl && (
            <Image
              source={{
                uri: userData.photoUrl,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              style={styles.poto}
            />
          )}
        </View>
        <View style={{marginTop: 60}}>
          <Text style={styles.nameprofile}>{userData?.fullName}</Text>
          <Text style={{textAlign: 'center', color: 'black'}}>
            Salam Berkebun !!!
          </Text>
          <TouchableOpacity style={styles.buttonEdit}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonEdit} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', marginTop: 40, marginHorizontal: 30}}>
            <TouchableOpacity
              style={styles.iconsosmed}
              onPress={() =>
                Linking.openURL('https://www.facebook.com/Yogianggara22/')
              }>
              <Icon name="logo-facebook" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconsosmed}
              onPress={() =>
                Linking.openURL('https://www.instagram.com/yogianggara.22/')
              }>
              <Icon name="logo-instagram" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconsosmed}
              onPress={() =>
                Linking.openURL('https://github.com/Yogianggara22')
              }>
              <Icon name="logo-github" size={25} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconsosmed}
              onPress={() =>
                Linking.openURL(
                  'https://www.linkedin.com/in/yogi-ainur-rofiq-anggara-137b06268/',
                )
              }>
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
    marginLeft: 120,
    marginRight: 120,
    backgroundColor: '#D0E7D2',
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#000000',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    color: '#515E63',
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
