import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import {colors, parameters} from './src/global/styles';
import SignInScreen from './src/screens/authScreens/SignInScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusBar}
        />

        <SignInScreen />
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
