import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style/mainStyle'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Principal from './screens/Principal';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
