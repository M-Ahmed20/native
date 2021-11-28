import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Button, Alert, ScrollView } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import * as Facebook from 'expo-facebook';


async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: '223174313161927',
      });
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        navigation.navigate('Dashboard')
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

function Decision(){
    return(
        <View style={{margin:200,alignItems:'center'}}>
            <SocialIcon
                title='Sign In With Facebook'
                button
                type='facebook'
                style={{ width: 220, margin:10 }}
                onPress={logIn}
            />
        </View>
    )
}
export default Decision;



