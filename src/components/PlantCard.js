import React, {useRef} from 'react';
import {FlatList, StyleSheet, Text, View, Image, Animated} from 'react-native';
import {colors, plantlist} from '../Data';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {formatDate} from '../utils/formatDate';

const PlantCard = () => {
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(1)).current;

  const startScaleAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View>
      <FlatList
        data={plantlist}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                startScaleAnimation();
                navigation.navigate('PlantDetail', {itemID: item.id});
              }}>
              <Animated.View
                style={[carditem.flatlish, {transform: [{scale: scaleValue}]}]}>
                <Image source={{uri: item.image}} style={carditem.image} />
                <Text style={carditem.Text}>{item.name}</Text>
              </Animated.View>
            </TouchableOpacity>
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PlantCard;

const carditem = StyleSheet.create({
  flatlish: {
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
});
