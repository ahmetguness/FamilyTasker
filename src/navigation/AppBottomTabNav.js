import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TaskListScreen from "../screens/TaskListScreen/TaskListScreen";
import CompletedTasksScreen from "../screens/CompletedTasksScreen/CompletedTasksScreen";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "../theme/colors";

const Tab = createBottomTabNavigator();

export default function AppBottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name="TaskListScreen"
        component={TaskListScreen}
        options={{
          title: "Task List",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons
                name="list"
                size={24}
                color={focused ? COLORS.primary : "black"}
              />
              <Text style={focused ? styles.focusedText : styles.text}>
                Task List
              </Text>
            </View>
          ),
          tabBarInactiveBackgroundColor: COLORS.gray3,
        }}
      />
      <Tab.Screen
        name="CompletedTasksScreen"
        component={CompletedTasksScreen}
        options={{
          title: "Completed Task List",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="checklist"
                size={24}
                color={focused ? COLORS.primary : "black"}
              />
              <Text style={focused ? styles.focusedText : styles.text}>
                Completed Task List
              </Text>
            </View>
          ),
          tabBarInactiveBackgroundColor: COLORS.gray3,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    marginHorizontal: "2%",
    marginBottom: "2%",
    borderRadius: 15,
    shadowColor: "black",
    shadowRadius: 15,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
  focusedText: {
    color: COLORS.primary,
  },
});
