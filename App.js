import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppTabNavigator } from './components/AppTabNavigator';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from './components/CustomSideBarMenu ';
import SignupLogin from "./screens/SignupLogin";
import SettingScreen from './screens/SettingScreen';
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';

export default function App() {
  return (
    <SignupLogin/>
  );
}

const AppDrawerNavigator= createDrawerNavigator({
  home:{screen:AppTabNavigator},
  setting:{screen:SettingScreen},
},

{contentComponent:CustomSideBarMenu},

{initialRouteName:'home'})

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: SignupLoginScreen},
  BottomTab:{screen: AppTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
const AppContainer = createAppContainer(AppDrawerNavigator);
