import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import {colors, parameters} from './src/global/styles';
import SignInWelcomeScreen from './src/screens/authScreens/SignInWelcomeScreen';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusBar}
        />
        {/* <SignInScreen /> */}
        {/* <SignInWelcomeScreen /> */}
        <RootNavigator />
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
