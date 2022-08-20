import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {withBadge} from '@rneui/themed';
import {colors, parameters} from '../global/styles';

const HomeHeader = () => {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardBackground}
          size={32}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            color: colors.cardBackground,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          XpressFood
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 15,
        }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={35}
          color={colors.cardBackground}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHight,
    justifyContent: 'space-between',
  },
});
