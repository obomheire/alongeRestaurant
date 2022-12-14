import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {colors, parameters, title} from '../../global/styles';
import Swiper from 'react-native-swiper';
import {Button} from '@rneui/base';
import {SignInContext} from '../../contexts/authContext';
import auth from '@react-native-firebase/auth';

const SignInWelcomeScreen = ({navigation}) => {
  const {dispatchAuthUser} = useContext(SignInContext);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        dispatchAuthUser({
          type: 'UPDATE_SIGN_IN',
          payload: {userToken: 'signed-in'},
        });
      } else {
        dispatchAuthUser({type: 'UPDATE_SIGN_OUT', payload: {userToken: null}});
      }
    });
  }, []);

  //  <View style={styles.container}>
  //    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
  //      <Text style={styles.text}>Inside</Text>
  //    </ImageBackground>
  //  </View>;
  const image = {
    uri: 'https://nowtoronto.com/wp-content/uploads/2022/01/afrobeatkitchen.jpg',
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          // paddingTop: 20,
        }}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text
            style={{
              fontSize: 26,
              color: 'white',
              fontWeight: 'bold',
              justifyContent: 'center',
            }}>
            DISCOVER RESTAURANTS IN YOUR AREA
          </Text>
        </ImageBackground>
      </View>

      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true} style={{height: 250}}>
          <View style={{...styles.slide, backgroundColor: '#9DD6EB'}}>
            <Image
              source={{
                uri: 'https://pas-wordpress-media.s3.amazonaws.com/content/uploads/2019/10/24135155/Fast-Food-Restaurant-Sample-Business-Plan-1-min.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={{...styles.slide, backgroundColor: '#92BBD9'}}>
            <Image
              source={{
                uri: 'https://www.thebalancesmb.com/thmb/l2azFSjRjWyGrAp-N_Vr6YNB5ws=/2000x1333/filters:fill(auto,1)/GettyImages-151327445-575dffcb3df78c98dcabe920.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={{...styles.slide, backgroundColor: '#97CAE5'}}>
            <Image
              source={{
                uri: 'https://assets2.cbsnewsstatic.com/hub/i/r/2015/07/01/0b059f60-344d-4ada-baae-e683aff3650a/thumbnail/1200x630/2226321bd6cfb38c77c917a8a48ae3e4/istock000044051102large.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={{...styles.slide, backgroundColor: '#97CAE5'}}>
            <Image
              source={{
                uri: 'https://www.rimpacaterer.com/images/slide1.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>
      <View style={{flex: 4, justifyContent: 'center', marginBottom: 20}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}
          />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SignInWelcomeScreen;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#75ba8a',
    height: 50,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
  },

  createButtonTitle: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});
