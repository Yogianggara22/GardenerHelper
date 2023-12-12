import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {itemsschedules} from '../../Data';
import {colors} from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';

const Pemangkasan = ({route}) => {
  const {itemID} = route.params;
  const selectedBlog = itemsschedules.find(blog => blog.id === itemID);
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-circle" size={25} color="#D0E7D2" />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 62,
          paddingBottom: 54,
        }}>
        <Image style={styles.image} source={{uri : selectedBlog.img}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <Text style={styles.category}>{selectedBlog.categoryName}</Text>
        </View>
        <Text style={styles.title}>{selectedBlog.name}</Text>
        <View style={styles.contenercontent}>
          <Text style={styles.steps}>Langkah-langkah Pemangkasan:</Text>
          {selectedBlog.pemangkasan.map((pemangkasan, index) => (
            <Text key={index} style={styles.contentsteps}>{`${
              index + 1
            }. ${pemangkasan}`}</Text>
          ))}
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default Pemangkasan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green2(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.green(),
  },
  image: {
    height: 280,
    width: 'auto',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: 'contain',
  },
  category: {
    color: colors.green(),
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 19,
    color: colors.black(),
    marginTop: 2,
    fontWeight: 'bold',
  },
  steps: {
    fontSize: 15,
    marginTop: 15,
    color: colors.black(),
  },
  contentsteps: {
    color: colors.black(),
    marginLeft: 6,
    marginVertical: 2,
    fontSize: 13,
    fontWeight: '400',
  },
  contenercontent: {
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
  },
});
