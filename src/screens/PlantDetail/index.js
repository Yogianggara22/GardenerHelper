import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {plantlist} from '../../Data';
import {colors} from '../../theme';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

const PlantDetail = ({route}) => {
  const {itemID} = route.params;
  const selectedBlog = plantlist.find(blog => blog.id === itemID);
  const navigation = useNavigation();
  const opacity = useSharedValue(0);
  useEffect(() => {
    opacity.value = withTiming(1, {duration: 500});
  }, []);
  const animatedStyle = useAnimatedStyle(() => {
    return {opacity: opacity.value};
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
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
        <Image style={styles.image} source={{uri :selectedBlog.image}} />
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
          <Text style={styles.steps}>Persiapan Lahan:</Text>
          {selectedBlog.lahan.map((lahan, index) => (
            <Text key={index} style={styles.contentsteps}>{`${
              index + 1
            } ) ${lahan}`}</Text>
          ))}
        </View>
        <View style={styles.contenercontent}>
          <Text style={styles.steps}>Penanaman: </Text>
          {selectedBlog.penanaman.map((penanaman, index) => (
            <Text key={index} style={styles.contentsteps}>{`${
              index + 1
            } ) ${penanaman}`}</Text>
          ))}
        </View>
        <View style={styles.contenercontent}>
          <Text style={styles.steps}>Perawatan: </Text>
          {selectedBlog.perawatan.map((perawatan, index) => (
            <Text key={index} style={styles.contentsteps}>{`${
              index + 1
            } ) ${perawatan}`}</Text>
          ))}
        </View>
        <View style={styles.contenercontent}>
          <Text style={styles.steps}>Penyiraman:</Text>
          {selectedBlog.penyiraman.map((penyiraman, index) => (
            <Text key={index} style={styles.contentsteps}>{`${
              index + 1
            } ) ${penyiraman}`}</Text>
          ))}
        </View>
        <View style={styles.contenercontent}>
          <Text style={styles.steps}>Pemeliharaan:</Text>
          {selectedBlog.pemeliharaan.map((pemeliharaan, index) => (
            <Text key={index} style={styles.contentsteps}>{`${
              index + 1
            } ) ${pemeliharaan}`}</Text>
          ))}
        </View>
      </ScrollView>
    </Animated.View>
  );
};
export default PlantDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green2(),
  },
  header: {
    paddingHorizontal: 24,
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
  titleheader: {
    fontSize: 16,
    color: colors.black(),
  },
  content: {
    color: colors.black(),
    fontSize: 13,
    lineHeight: 20,
    marginTop: 5,
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
