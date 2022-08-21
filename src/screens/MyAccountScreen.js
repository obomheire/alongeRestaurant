import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyAccountScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MyAccountScreen</Text>
    </View>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});