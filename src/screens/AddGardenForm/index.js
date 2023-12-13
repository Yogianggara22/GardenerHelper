import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../theme';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import FastImage from 'react-native-fast-image';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const AddGardenForm = () => {
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleImagePick = async () => {
    try {
      const pickedImage = await ImagePicker.openPicker({
        width: 2800,
        height: 2800,
        cropping: true,
      });

      console.log('Gambar Terpilih:', pickedImage);

      if (pickedImage && pickedImage.path) {
        setImage(pickedImage.path);
      } else {
        console.log('Path Gambar null');
      }
    } catch (error) {
      console.log('Error memilih gambar:', error);
    }
  };

  const dataCategory = [
    {id: 1, name: 'Tanaman Hias'},
    {id: 2, name: 'Tanaman pangan'},
    {id: 3, name: 'Tanaman Obat-obatan'},
    {id: 4, name: 'Tanaman Buah'},
  ];

  const [blogData, setBlogData] = useState({
    name: '',
    content: '',
    image: null,
    categoryName: {},
  });

  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };

  const handleUpload = async () => {
    if (image) {
      let filename = image.substring(image.lastIndexOf('/') + 1);
      const extension = filename.split('.').pop();
      const name = filename.split('.').slice(0, -1).join('.');
      filename = name + Date.now() + '.' + extension;
      const reference = storage().ref(`blogimages/${filename}`);

      setLoading(true);

      try {
        const authorId = auth().currentUser.uid;
        await reference.putFile(image);
        const url = await reference.getDownloadURL();
        await firestore().collection('blog').add({
          name: blogData.name,
          categoryName: blogData.categoryName,
          image: url,
          content: blogData.content,
          createdAt: new Date(),
          authorId,
        });
        setLoading(false);
        console.log('Blog added!');
        navigation.navigate('Garden');
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Image path is null');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-circle" size={25} color="#000000" />
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.title}>Garden Form</Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingVertical: 10,
            gap: 10,
          }}>
          <View style={textInput.borderDashed}>
            <TextInput
              placeholder="Nama Tanaman"
              value={blogData.name}
              onChangeText={text => handleChange('name', text)}
              placeholderTextColor={colors.grey(0.6)}
              multiline
              style={textInput.title}
            />
          </View>

          {image ? (
            <View style={{position: 'relative'}}>
              <FastImage
                style={{width: '100%', height: 280, borderRadius: 5}}
                source={{
                  uri: image,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: -5,
                  right: -5,
                  backgroundColor: colors.blue(),
                  borderRadius: 25,
                }}
                onPress={() => setImage(null)}>
                <Icon
                  name="add-outline"
                  size={20}
                  color={colors.white()}
                  style={{transform: [{rotate: '45deg'}]}}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={handleImagePick}>
              <View
                style={[
                  textInput.borderDashed,
                  {
                    gap: 10,
                    paddingVertical: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <Icon
                  name="add-circle-outline"
                  color={colors.grey(0.6)}
                  size={42}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.grey(0.6),
                  }}>
                  Upload Gambar
                </Text>
              </View>
            </TouchableOpacity>
          )}

          <View style={[textInput.borderDashed, {minHeight: 250}]}>
            <TextInput
              placeholder="Deskripsi Tanaman"
              value={blogData.content}
              onChangeText={text => handleChange('content', text)}
              placeholderTextColor={colors.grey(0.6)}
              multiline
              style={textInput.content}
            />
          </View>

          <View style={[textInput.borderDashed]}>
            <Text
              style={{
                fontSize: 12,
                color: colors.grey(0.6),
              }}>
              Category Tanaman
            </Text>
            <View style={category.container}>
              {dataCategory.map(item => {
                const bgColor =
                  item.id === blogData.categoryName.id
                    ? colors.green()
                    : colors.grey(0.2);
                const color =
                  item.id === blogData.categoryName.id
                    ? colors.white()
                    : colors.grey();
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() =>
                      handleChange('categoryName', {
                        id: item.id,
                        name: item.name,
                      })
                    }
                    style={[category.item, {backgroundColor: bgColor}]}>
                    <Text style={[category.name, {color: color}]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonLabel}>Upload</Text>
        </TouchableOpacity>
        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={colors.blue()} />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddGardenForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green2(),
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.black(0.4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 16,
    color: colors.black(),
    fontWeight: 'bold',
    marginRight: 30,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.green(),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 25,
    elevation: 3,
  },
  buttonLabel: {
    fontSize: 14,
    color: colors.white(),
    fontWeight: '400',
  },
});

const textInput = StyleSheet.create({
  borderDashed: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.grey(0.6),
  },
  title: {
    fontSize: 12,
    color: colors.black(),
    paddingVertical: 0,
  },
  content: {
    fontSize: 12,
    color: colors.black(),
    paddingVertical: 0,
  },
});

const category = StyleSheet.create({
  title: {
    fontSize: 12,
    color: colors.black(),
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 10,
  },
});
