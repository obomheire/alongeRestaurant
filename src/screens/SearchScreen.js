import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  ImageBackgroundComponent,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchComponent from '../components/SearchComponent';
import {filterData2} from '../global/data';
import {colors} from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchScreenItems = ({ category, marginStyle, listFooterComp }) => {
  
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        style={marginStyle}
        data={filterData2}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('SearchResultScreen', {item: item.name});
            }}>
            <View style={styles.imageView}>
              <ImageBackground style={styles.image} source={{uri: item.image}}>
                <View style={styles.textView}>
                  <Text style={{color: colors.cardBackground}}>
                    {item.name}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        )}
        horizontal={false}
        showsverticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={<Text style={styles.listHeader}>{category}</Text>}
        ListFooterComponent={listFooterComp}
      />
    </View>
  );
};

const Footer = () => {
  return (
    <View style={{marginTop: 20, marginBottom: 30}}>
      <SearchScreenItems
        category="More Categories"
        marginStyle={{marginBottom: 10}}
        listFooterComp={false}
      />
    </View>
  );
};

const SearchScreen = () => {
  return (
    <View style={{flex: 1, marginBottom: 10, paddingTop: 20}}>
      <SearchComponent />

      <View style={{marginTop: 10}}>
        <SearchScreenItems
          category="Categories"
          marginStyle={{}}
          listFooterComp={<Footer />}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
  },

  image: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    borderRadius: 10,
  },

  listHeader: {
    fontSize: 16,
    color: colors.grey2,
    paddingBottom: 10,
    marginLeft: 12,
  },

  textView: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52,0.3)',
  },
});