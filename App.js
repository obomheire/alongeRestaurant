import 'react-native-gesture-handler';
import {StatusBar, StyleSheet, View, LogBox} from 'react-native';
import React from 'react';
import {colors} from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';
import { SignInContextProvider } from './src/contexts/authContext';

// To ignore this error warning: WARN  EventEmitter.removeListener(...), add the following lines:
LogBox.ignoreLogs(['EventEmitter.removeListener']);

const App = () => {

  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusBar}
        />
        <RootNavigator />
      </View>
    </SignInContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
