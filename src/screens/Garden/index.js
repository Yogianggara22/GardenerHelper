import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  Text,
  View,
  StatusBar,
  FlatList,
  Image,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {colors} from '../../Data';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const Garden = () => {
  const navigation = useNavigation();
  const [PlantData, setPlantData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const subscriber = firestore()
      .collection('blog')
      .onSnapshot(
        querySnapshot => {
          const blogs = [];
          querySnapshot.forEach(documentSnapshot => {
            blogs.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setPlantData(blogs);
          setLoading(false);
        },
        error => {
          console.error('Error fetching blogs: ', error);
          setLoading(false);
        },
      );

    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    firestore()
      .collection('blog')
      .onSnapshot(
        querySnapshot => {
          const blogs = [];
          querySnapshot.forEach(documentSnapshot => {
            blogs.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setPlantData(blogs);
          setRefreshing(false);
        },
        error => {
          console.error('Error refreshing blogs: ', error);
          setRefreshing(false);
        },
      );
  }, []);

  const navigateEdit = itemID => {
    navigation.navigate('EditBlog', {itemID});
  };

  const handleDelete = async itemID => {
    setLoading(true);

    try {
      const selectedBlog = PlantData.find(blog => blog.id === itemID);

      if (!selectedBlog) {
        console.error('Selected blog not found');
        setLoading(false);
        return;
      }

      if (selectedBlog.image && typeof selectedBlog.image === 'string') {
        const imageRef = storage().refFromURL(selectedBlog.image);

        await firestore().collection('blog').doc(itemID).delete();

        await imageRef.delete();

        console.log('Blog and image deleted!');
      } else {
        console.error('Invalid image URL');
      }

      setSelectedBlog(null);
      setLoading(false);
      navigation.navigate('Garden');
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#D0E7D2'} />
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Animated.View style={[styles.dashboard]}>
          <Text style={styles.tanamanText}>Plant</Text>

          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            <Animated.View>
              <FlatList
                data={PlantData}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('GardenDetail', {itemID: item.id})
                    }
                    onLongPress={() => handleDelete(item.id)}>
                    <Animated.View style={[carditem.flatlist]}>
                      {item.image ? (
                        <Image
                          source={{uri: item.image}}
                          style={carditem.image}
                        />
                      ) : (
                        <Text>No Image</Text>
                      )}
                      <Text style={carditem.Text}>{item.name}</Text>
                      <View style={carditem.buttonContainer}>
                        <TouchableOpacity onPress={() => handleDelete(item.id)}>
                          <Text style={{color: 'red'}}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigateEdit(item.id)}>
                          <Text style={{color: 'blue', marginHorizontal: 10}}>
                            Edit
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </Animated.View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </Animated.View>
          )}
        </Animated.View>
      </ScrollView>
      <View style={styles.balanceButton}>
        <TouchableOpacity onPress={() => navigation.navigate('AddBlog')}>
          <Icon name="add-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Garden;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0E7D2',
  },
  tanamanText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginHorizontal: 20,
  },
  dashboard: {
    flex: 1,
    backgroundColor: '#D0E7D2',
  },
  scrollView: {
    flex: 1,
  },
  balanceButton: {
    width: 42,
    height: 42,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#79AC78',
    elevation: 2,
    marginVertical: 20,
    marginLeft: 380,
  },
});

const carditem = StyleSheet.create({
  flatlist: {
    backgroundColor: colors.COLOR_LIGHT,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    marginVertical: 16,
    alignItems: 'center',
    paddingHorizontal: 9,
    paddingVertical: 12,
    marginHorizontal: 28,
  },
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: 'center',
  },
  Text: {
    color: '#000000',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginHorizontal: 10,
  },
});
