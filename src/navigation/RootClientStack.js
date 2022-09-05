import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import MenuProductScreen from '../screens/MenuProductScreen';
import PreferenceScreen from '../screens/PreferenceScreen';

const ClientSearch = createStackNavigator();

const RootClientStack = () => {

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
