import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {colors} from '../../theme';

const GardenDetail = ({route}) => {
  const {itemID} = route.params;
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const scale = useSharedValue(0);
  scale.value = withTiming(1, {duration: 500, easing: Easing.ease});

  const animatedStyles = useAnimatedStyle(() => {
    return {transform: [{scale: scale.value}]};
  });

  const actionSheetRef = useRef(null);

  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('blog')
      .doc(itemID)
      .onSnapshot(documentSnapshot => {
        const blogData = documentSnapshot.data();
        if (blogData) {
          console.log('Blog data: ', blogData);
          setSelectedBlog(blogData);
        } else {
          console.log(`Blog with ID ${itemID} not found.`);
        }
      });
    setLoading(false);
    return () => subscriber();
  }, [itemID]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() =>navigation.navigate('Garden')}>
          <Icon name="chevron-back-circle" size={25} color="#D0E7D2" />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <TouchableOpacity onPress={openActionSheet}>
            <Icon
              name="ellipsis-vertical-outline"
              color={colors.grey(0.6)}
              variant="Linear"
              style={{transform: [{rotate: '90deg'}]}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 62,
          paddingBottom: 54,
        }}>
        {selectedBlog && (
          <>
            <Animated.Image
              style={[
                styles.image,
                animatedStyles,
                {width: '100%', alignSelf: 'stretch'},
              ]}
              source={{uri: selectedBlog.image}}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <Text style={styles.category}>
                {selectedBlog.categoryName.name}
              </Text>
            </View>
            <Animated.Text style={[styles.title, animatedStyles]}>
              {selectedBlog.name}
            </Animated.Text>
            <Animated.Text style={[styles.content, animatedStyles]}>
              {selectedBlog.content}
            </Animated.Text>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default GardenDetail;

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
    resizeMode: 'contain',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  category: {
    color: colors.green(),
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 19,
    color: colors.black(),
    marginTop: 10,
    fontWeight: 'bold',
  },
  content: {
    color: colors.black(),
    fontSize: 13,
    lineHeight: 20,
    marginTop: 5,
  },
});
