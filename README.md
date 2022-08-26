NB:
RootClientTabs.js : ClientTabs.js

Refactor:
- Change App's color
- Replace the map function in HomeScreen with FlatList
- Reuse <FoofCard /> component in <SearchResultCard /> rather than repeating the contents again
- Use the proper recommended syntax to remove the tab navigation bar from the RestaurantHomeScreem from the ClientStack.js 
- Upadate MenuTabs.js with local component route that will be called from route1 - route8
-Remove Tab Navigation from RestaurantHomeScreen.js and MenuProductScreen.js
- In the SignInScreen.js & SignUpScreen.js make a reusable component for the password field
- In the SignUpScreen.js use only one <Text> tag for the text and use syle to format to V shape
- In the SignUpScreen.js make a reusable component for the already have account and the Sign-in Button it was similarly done in the SignInScreen.js

SearchScreen no component:

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
import SearchComponent from '../components/SearchComponent';
import {filterData2} from '../global/data';
import {colors} from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Footer = () => {
  return (
    <View style={{ marginTop: 20, marginBottom: 30 }}>
      <View>
        <FlatList
          style={{ marginBottom: 10 }}
          data={filterData2}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('SearchResultScreen', { item: item.name });
              }}>
              <View style={styles.imageView}>
                <ImageBackground
                  style={styles.image}
                  source={{ uri: item.image }}>
                  <View style={styles.textView}>
                    <Text style={{ color: colors.cardBackground }}>
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
          ListHeaderComponent={
            <Text style={styles.listHeader}>More Categories</Text>
          }
        />
      </View>
    </View>
  );
};

const SearchScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, marginBottom: 10, paddingTop: 20}}>
      <SearchComponent />

      <View style={{marginTop: 10}}>
        <View>
          <FlatList
            style={{}}
            data={filterData2}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('SearchResultScreen', {item: item.name});
                }}>
                <View style={styles.imageView}>
                  <ImageBackground
                    style={styles.image}
                    source={{uri: item.image}}>
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
            ListHeaderComponent={
              <Text style={styles.listHeader}>Top Categories</Text>
            }
            ListFooterComponent={<Footer />}
          />
        </View>
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
