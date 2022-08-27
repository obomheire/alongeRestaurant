import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './AuthStack';
import {AppStack} from './AppStack';
import {SignInContext} from '../contexts/authContext';

const RootNavigator = () => {
  const {authUser} = useContext(SignInContext);

  return (
    <NavigationContainer>
      {authUser.userToken === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
