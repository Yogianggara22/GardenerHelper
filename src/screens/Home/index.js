import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import Header from '../../components/Header';
import PlantCard from '../../components/PlantCard';
import {categories} from '../../Data';
import {colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  return (
    <SafeAreaView style={home.area}>
      <View style={home.viw}>
        <View>
          <Header />
          <Text style={home.categoriText}>Categories</Text>
          <View>
            <FlatListCategory />
          </View>
        </View>

        <View style={home.dashboard}>
          <Text style={home.tanamanText}>Tanaman</Text>
          <PlantCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

const ItemCategory = ({item, onPress, color, animatedStyle}) => {
  const navigation = useNavigation();
  return (
    <Animated.View style={[category.item, animatedStyle]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const scrollX = new Animated.Value(0);

  const renderItem = ({item, index}) => {
    const color = item.id === selected ? colors.green() : colors.black();
    const inputRange = [(index - 1) * 100, index * 100, (index + 1) * 100];

    const translateY = Animated.diffClamp(
      scrollX,
      inputRange[0],
      inputRange[2],
    ).interpolate({
      inputRange,
      outputRange: [-5, 0, 0],
    });

    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
        animatedStyle={{transform: [{translateY}]}}
      />
    );
  };

  return (
    <Animated.FlatList
      data={categories}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: false,
      })}
    />
  );
};

export default Home;

const home = StyleSheet.create({
  categoriText: {
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  tanamanText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  dashboard: {
    marginHorizontal: 20,
    marginTop: 30,
    flex: 1,
    backgroundColor: '#D0E7D2',
  },
  area: {
    flex: 1,
    marginHorizontal: 5,
  },
  viw: {
    flex: 1,
    backgroundColor: '#D0E7D2',
  },
});

const category = StyleSheet.create({
  item: {
    backgroundColor: '#F5FFFA',
    borderRadius: 15,
    paddingHorizontal: 14,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 7,
    marginVertical: 2,
  },
  title: {
    color: 'black',
    fontSize: 13,
  },
});
