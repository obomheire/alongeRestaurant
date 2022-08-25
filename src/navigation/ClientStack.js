import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import MenuProductScreen from '../screens/MenuProductScreen';
// import RootClientTabs from './RootClientTabs';

const ClientSearch = createStackNavigator();

const ClientStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'RestaurantHomeScreen' || 'MenuProductScreen') {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);

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
    </ClientSearch.Navigator>
  );
};

export default ClientStack;
