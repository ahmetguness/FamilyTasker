import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../screens/IntroScreen/IntroScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import InfoScreen from "../screens/InfoScreen/InfoScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SelectScreen from "../screens/LoginScreen/SelectScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import AddTaskScreen from "../screens/AddTaskScreen/AddTaskScreen";
import ProfileSettings from "../screens/ProfileSettings/ProfileSettings";
import AwardListScreen from "../screens/AwardListScreen/AwardListScreen";
import AppBottomTabNav from "./AppBottomTabNav";
import QRScanner from "../components/QRScanner/QRScanner";

export default function AppStackNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="InfoScreen" component={InfoScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SelectScreen" component={SelectScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      <Stack.Screen name="AwardListScreen" component={AwardListScreen} />
      <Stack.Screen name="AppBottomTabNav" component={AppBottomTabNav} />
      <Stack.Screen name="QRScanner" component={QRScanner} />
    </Stack.Navigator>
  );
}
