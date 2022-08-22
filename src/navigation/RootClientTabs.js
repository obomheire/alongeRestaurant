import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, parameters} from '../global/styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ClientTabs = createBottomTabNavigator();

const RootClientTabs = () => {
  return (
    <ClientTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.buttons,
      }}>
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <ClientTabs.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />

      <ClientTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="view-list"
              type="material"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <ClientTabs.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </ClientTabs.Navigator>
  );
};

export default RootClientTabs;

