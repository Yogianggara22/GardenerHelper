import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  FlatList,
  Animated,
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import {itemsschedules} from '../../Data';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const Schedule = () => {
  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);
  const fadeIn = new Animated.Value(0);

  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');

    return [-1, 0, 1].map(adj => {
      return Array.from({length: 7}).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');

        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#D0E7D2'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <StatusBar barStyle="dark-content" backgroundColor={'#D0E7D2'} />
          <Text style={styles.title}>
            Gardener<Text style={{color: '#79AC78'}}>Helper</Text>
            <Image
              style={{
                width: 45,
                height: 45,
                position: 'absolute',
              }}
              source={{
                uri: 'https://i.pinimg.com/736x/6e/07/a4/6e07a43af36e1ab6a1cd6fb4c11cf234.jpg',
              }}
            />
          </Text>
        </View>
        <View style={styles.picker}>
          <Swiper
            index={1}
            ref={swiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={ind => {
              if (ind === 1) {
                return;
              }
              setTimeout(() => {
                const newIndex = ind - 1;
                const newWeek = week + newIndex;
                setWeek(newWeek);
                setValue(moment(value).add(newIndex, 'week').toDate());
                swiper.current.scrollTo(1, false);
              }, 100);
            }}>
            {weeks.map((dates, index) => (
              <View
                style={[styles.itemRow, {paddingHorizontal: 16}]}
                key={index}>
                {dates.map((item, dateIndex) => {
                  const isActive =
                    value.toDateString() === item.date.toDateString();
                  return (
                    <TouchableWithoutFeedback
                      key={dateIndex}
                      onPress={() => setValue(item.date)}>
                      <Animated.View
                        style={[
                          styles.item,
                          {opacity: fadeIn},
                          isActive && {
                            backgroundColor: '#5B8A72',
                            borderColor: '#111',
                          },
                        ]}>
                        <Text
                          style={[
                            styles.itemWeekday,
                            isActive && {color: '#fff'},
                          ]}>
                          {item.weekday}
                        </Text>
                        <Text
                          style={[
                            styles.itemDate,
                            isActive && {color: '#fff'},
                          ]}>
                          {item.date.getDate()}
                        </Text>
                      </Animated.View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
        </View>

        <View style={{flex: 1, paddingHorizontal: 16, paddingVertical: 24}}>
          <Text style={styles.subtitle}>{value.toDateString()}</Text>
          <View style={styles.placeholder}>
            <Isi />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Isi = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styl.container}>
      {itemsschedules.map(({img, name, categoryName, item}, index) => {
        return (
          <Animated.View
            key={index}
            style={{
              ...styl.card,
              opacity: 10,
            }}>
            <Image source={{uri : img}} style={styl.cardImg} />

            <View style={styl.cardBody}>
              <View
                style={{
                  justifyContent: 'center',
                  marginLeft: 10,
                }}>
                <Text style={styl.cardAirport}>{categoryName}</Text>
                <Text style={styl.cardTitle}>{name}</Text>
              </View>

              <View style={styl.btncontener}>
                <FlatList
                  data={itemsschedules}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Pemangkasan', {
                          itemID: item.id,
                        });
                      }}>
                      <View style={styl.btn}>
                        <Icon color="#ffffff" name="cut-outline" size={18} />
                      </View>
                    </TouchableOpacity>
                  )}
                  numColumns={2}
                  columnWrapperStyle={{
                    justifyContent: 'space-between',
                  }}
                  showsVerticalScrollIndicator={false}
                />

                <FlatList
                  data={itemsschedules}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Penyiraman', {itemID: item.id});
                      }}>
                      <View style={styl.btn}>
                        <Icon color="#ffffff" name="water-outline" size={18} />
                      </View>
                    </TouchableOpacity>
                  )}
                  numColumns={2}
                  columnWrapperStyle={{
                    justifyContent: 'space-between',
                  }}
                  showsVerticalScrollIndicator={false}
                />

                <FlatList
                  data={itemsschedules}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Pemupukan', {itemID: item.id});
                      }}>
                      <View style={styl.btn}>
                        <Icon color="#ffffff" name="leaf-outline" size={18} />
                      </View>
                    </TouchableOpacity>
                  )}
                  numColumns={2}
                  columnWrapperStyle={{
                    justifyContent: 'space-between',
                  }}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </View>
          </Animated.View>
        );
      })}
    </SafeAreaView>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    padding: 0,
  },
  placeholderInset: {
    borderWidth: 4,

    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  container: {
    flex: 1,
    paddingVertical: 2,
    marginTop: 10,
  },
  picker: {
    flex: 1,
    maxHeight: 74,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  header: {
    paddingHorizontal: 16,
  },
  content: {
    paddingHorizontal: 16,
  },
  footer: {
    marginTop: 'auto',
    paddingHorizontal: 10,
  },
  itemRow: {
    width: width,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: -4,
  },
  item: {
    flex: 1,
    height: 50,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#5B8A72',
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemWeekday: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },
});

const styl = StyleSheet.create({
  stats: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  statsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 30,
  },
  statsItemLabel: {
    marginLeft: 8,
    marginRight: 'auto',
    fontSize: 20,
    fontWeight: '600',
    color: '#4e4a6d',
  },
  statsItemValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4e4a6d',
  },
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#D0E7D2',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  cardImg: {
    width: 150,
    height: 150,
    borderRadius: 12,
  },
  cardBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cardTitle: {
    justifyContent: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: '#173153',
  },
  cardAirport: {
    justifyContent: 'center',
    fontSize: 13,
    fontWeight: '600',
    color: '#5f697d',
  },
  btn: {
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    marginHorizontal: 5,
    backgroundColor: '#5B8A72',
    borderColor: '#5B8A72',
  },
  btncontener: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  btnText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
