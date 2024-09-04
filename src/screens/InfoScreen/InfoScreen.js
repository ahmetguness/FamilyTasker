import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export default function InfoScreen() {
  const navigation = useNavigation();

  const appInfo = [
    {
      key: "Registration and Login:",
      value: "Offers separate login options for parents and children.",
    },
    {
      key: "Parent Profile Creation:",
      value:
        "Parents create a profile and add their children, entering names, ages, and other necessary information.",
    },
    {
      key: "Task Assignment:",
      value:
        "Parents assign tasks to their children, such as daily routines, household chores, study activities, etc. Each task is assigned a specific point value.",
    },
    {
      key: "Task Completion:",
      value:
        "Children log into the app to see their assigned tasks. They mark tasks as completed in the app. Parents approve completed tasks.",
    },
    {
      key: "Point Collection:",
      value:
        "Children collect points for each completed task. The accumulated points are displayed in the app and added to the child's profile.",
    },
    {
      key: "Reward Setting:",
      value:
        "Parents set rewards that can be obtained with a certain number of points, such as a trip to the amusement park, movie tickets, extra game time, etc.",
    },
    {
      key: "Point Spending:",
      value:
        "Children can spend their collected points on rewards. Reward requests are approved by parents, and points are deducted.",
    },
    {
      key: "Notifications:",
      value:
        "Notifications are sent to parents and children when a task is assigned, completed, or a reward request is made.",
    },
    {
      key: "Progress Tracking:",
      value:
        "Parents and children can track completed tasks and earned rewards through the app. Weekly or monthly reports display the child's performance.",
    },
    {
      key: "Customization and Settings:",
      value:
        "Users can customize profile information, notification preferences, and task/reward definitions through the app settings.",
    },
  ];

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Application Information</Text>
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={appInfo}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemKey}>{item.key}</Text>
            <Text style={styles.itemValue}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}
