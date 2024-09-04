import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function IntroScreen() {
  const navigation = useNavigation();
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();

  return (
    <View style={styles.root}>
      <Image
        source={require("../../assets/backgrounds/bg1.png")}
        style={[
          styles.backgroundImage,
          { height: windowHeight, width: windowWidth },
        ]}
      />
      <View style={styles.overlay} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>A World of Motivation and Fun</Text>
        <Text style={styles.description}>
          Hello! This app is designed for parents and children, providing a fun
          and educational experience through daily tasks. Parents can assign
          various tasks to their children, helping to increase their sense of
          responsibility and motivate them with a rewarding system. Children can
          earn points for each completed task and use these points to redeem
          exciting rewards. Whether it's making the bed or helping with
          household chores, every task fosters positive interactions within the
          family and contributes to the child's development.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SelectScreen")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
