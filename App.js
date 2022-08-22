import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet, Text, View, LogBox, AppState} from 'react-native';
import React, {useEffect} from 'react';
import {colors, parameters} from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';

// To ignore this error warning: WARN  EventEmitter.removeListener(...), add the following lines:
// import {LogBox} from 'react-native';
LogBox.ignoreLogs(['EventEmitter.removeListener']);

const App = () => {
  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', () => {});
  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusBar}
        />
        <RootNavigator />
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
