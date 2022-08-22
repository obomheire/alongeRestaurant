import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../global/styles';
import { filterData } from '../global/data';
import filter from 'lodash/filter';


const SearchComponent = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([...filterData]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFocused, setTextInputFocused] = useState(true);
  const textInput = useRef(0);

  const contains = ({name}, query) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };

  const handleSearch = text => {
    const dataS = filter(filterData, userSearch => {
      return contains(userSearch, text);
    });

    setData([...dataS]);
  };


  return (
    <View style={{alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={styles.SearchArea}>
          <Ionicons
            name="search"
            style={styles.searchIcon}
            iconStyle={{marginLeft: 5}}
            size={32}
          />
          <Text style={{fontSize: 15}}>What are you looking for ?</Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.TextInput}>
              <Animatable.View
                animation={textInputFocused ? 'fadeInRight' : 'fadeInLeft'}
                duration={400}>
                <Ionicons
                  name={textInputFocused ? 'arrow-back' : 'search'}
                  onPress={() => {
                    if (textInputFocused) setModalVisible(false);
                    setTextInputFocused(true);
                  }}
                  style={styles.icon2}
                  iconStyle={{marginRight: 5}}
                />
              </Animatable.View>

              <TextInput
                style={{width: '90%'}}
                placeholder=""
                autoFocus={false}
                ref={textInput}
                onFocus={() => {
                  setTextInputFocused(true);
                }}
                onBlur={() => {
                  setTextInputFocused(false);
                }}
                onChangeText={handleSearch}
              />

              <Animatable.View
                animation={textInputFocused ? 'fadeInLeft' : ''}
                duration={400}>
                <MaterialIcons
                  name={textInputFocused ? 'cancel' : null}
                  iconStyle={{color: colors.grey3}}
                  style={{marginRight: -10}}
                  onPress={() => {
                    textInput.current.clear();
                    // handleSearch()
                  }}
                />
              </Animatable.View>
            </View>
          </View>

          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss;
                  navigation.navigate('RestaurantSearchScreen', {
                    item: item.name,
                  });
                  setModalVisible(false);
                  setTextInputFocused(true);
                }}>
                <View style={styles.view2}>
                  <Text style={{color: colors.grey2, fontSize: 15}}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 25,
  },

  SearchArea: {
    marginTop: 10,
    width: '94%',
    height: 50,
    backgroundColor: colors.grey5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.grey4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchIcon: {fontSize: 24, padding: 5, color: colors.grey2},

  view1: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  view2: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },

  icon2: {fontSize: 24, padding: 5, color: colors.grey2},
  modal: {
    flex: 1,
  },
});
