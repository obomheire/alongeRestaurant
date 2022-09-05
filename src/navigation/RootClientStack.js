import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import MenuProductScreen from '../screens/MenuProductScreen';
import PreferenceScreen from '../screens/PreferenceScreen';
// import RootClientTabs from './RootClientTabs';

const ClientSearch = createStackNavigator();

const RootClientStack = ({navigation, route}) => {
  // useLayoutEffect(() => {
  //   const routeName = getFocusedRouteNameFromRoute(route);
  //   console.log(routeName);
  //   if (routeName === 'RestaurantHomeScreen' || 'MenuProductScreen') {
  //     navigation.setOptions({tabBarStyle: {display: 'none'}});
  //   } else {
  //     navigation.setOptions({tabBarStyle: {display: 'flex'}});
  //   }
  // }, [navigation, route]);

  return (
    <ClientSearch.Navigator>
      <ClientSearch.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="RestaurantHomeScreen"
        component={RestaurantHomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="MenuProductScreen"
        component={MenuProductScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="PreferenceScreen"
        component={PreferenceScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </ClientSearch.Navigator>
  );
};

export default RootClientStack;
