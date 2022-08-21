import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyOrdersScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MyOrdersScreen</Text>
    </View>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});