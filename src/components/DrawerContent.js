import React, { useState, useContext, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

import {
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  Switch,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {Avatar, Icon, Button} from '@rneui/base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../global/styles';
import { drawerItems } from '../global/data';
import {SignInContext} from '../contexts/authContext';

const DrawerContent = props => {

   const {dispatchAuthUser} = useContext(SignInContext);

const signOut = async () => {
     try {
       await auth().signOut()
         console.log('USER SUCCESSFULLY SIGNED OUT');
         dispatchAuthUser({
           type: 'UPDATE_SIGN_OUT',
           payload: {userToken: null},
         });
     } catch (error) {
       Alert.alert(error.code);
     }
   }
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: colors.buttons}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              paddingVertical: 10,
            }}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={{
                uri: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
              }}
            />

            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.cardBackground,
                  fontSize: 18,
                }}>
                Zack Bello
              </Text>
              <Text style={{color: colors.cardBackground, fontSize: 14}}>
                {' '}
                zack@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingBottom: 5,
            }}>
            <View style={{flexDirection: 'row', marginTop: 0}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: colors.cardBackground,
                    fontSize: 18,
                  }}>
                  1
                </Text>
                <Text style={{color: colors.cardBackground, fontSize: 14}}>
                  My Favorites
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 0}}>
              <View
                style={{
                  marginLeft: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: colors.cardBackground,
                    fontSize: 18,
                  }}>
                  0
                </Text>
                <Text style={{color: colors.cardBackground, fontSize: 14}}>
                  My Cart
                </Text>
              </View>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />

        {/* <FlatList
          data={drawerItems}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <DrawerItem
              label={item.label}
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name={item.name}
                  color={color}
                  size={size}
                />
              )}
            />
          )}
        /> */}

        {drawerItems.map(item => (
          <View key={item.id}>
            <DrawerItem
              label={item.label}
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name={item.name}
                  color={color}
                  size={size}
                />
              )}
            />
          </View>
        ))}

        <View style={{borderTopWidth: 1, borderTopColor: colors.grey5}}>
          <Text style={styles.preferences}>Preferences</Text>

          <View style={styles.switchText}>
            <Text style={styles.darkthemeText}>Dark Theme</Text>
            <View style={{paddingRight: 10}}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor="#f4f3f4"
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>

      {/* <TouchableOpacity onPress={() => signOut()}> */}
        <DrawerItem
          label="Sign Out"
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="logout-variant"
              color={color}
              size={size}
              onPress={() => {
                signOut();
              }}
            />
          )}
        />
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  avatar: {
    borderWidth: 4,
    borderColor: colors.pagebackground,
  },

  preferences: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 20,
  },

  switchText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkthemeText: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: 'bold',
  },
});
