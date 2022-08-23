import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground, Animated} from 'react-native';
import {restaurantsData} from '../global/data';
import {colors} from '../global/styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantHeader = ({navigation,id}) => {
  const index2 = 10;
  const currentValue = new Animated.Value(1);

  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  const [visible, setVisible] = useState(false);

  const likeHander = () => {
    if (!liked) setVisible(true);

    setLiked(!liked);
    setCounter(index2);
  };

  useEffect(() => {
    if (liked) {
      Animated.spring(currentValue, {
        toValue: 3,
        friction: 2,
        useNativeDriver: true,
      }).start(() => {
        Animated.spring(currentValue, {
          toValue: 1,
          useNativeDriver: true,
          friction: 2,
        }).start(() => {
          setVisible(false);
        });
      });
    }
  }, [liked]);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={{uri: restaurantsData[id].images}}
        imageStyle={styles.image}>
        <View style={styles.view1}>
          <View style={styles.view2}>
            <MaterialCommunityIcons
              name="arrow-left"
              color={colors.black}
              size={25}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.view3}>
            <MaterialIcons
              name={liked && index2 == counter ? 'favorite' : 'favorite-border'}
              color="red"
              size={30}
              onPress={likeHander}
            />
          </View>
        </View>
        <View style={styles.view4}>
          {visible && index2 == counter && (
            <Animated.View style={{transform: [{scale: currentValue}]}}>
              <MaterialIcons name="favorite" size={40} color="red" />
            </Animated.View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default RestaurantHeader;

const styles = StyleSheet.create({
  container: {height: 150},

  view1: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },

  view2: {
    margin: 10,
    width: 40,
    height: 40,
    backgroundColor: colors.cardbackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  view3: {
    marginTop: 0,
    margin: 10,
    width: 40,
    height: 40,
    backgroundColor: colors.cardbackground,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  view4: {marginTop: 0, alignItems: 'center', justifyContent: 'center'},
});
