import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootClientTabs from './RootClientTabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, parameters } from '../global/styles';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen'
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
          title: 'Client',
          drawerIcon: ({focussed, size}) => (
            <MaterialCommunityIcons
              name="home"
              color={focussed ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Business consoleScreen"
        component={BusinessConsoleScreen}
        options={{
          title: 'Business console',
          drawerIcon: ({focussed, size}) => (
            <Ionicons
              name="business"
              color={focussed ? '#7cc' : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
