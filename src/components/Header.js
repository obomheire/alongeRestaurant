import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

import {colors, parameters} from '../global/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({title, name, navigation}) => {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 20}}>
        <MaterialCommunityIcons
          name={name}
          color={colors.headerText}
          size={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
