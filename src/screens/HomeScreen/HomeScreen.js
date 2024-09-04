import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ParentHomeScreen from "./ParentHomeScreen";
import ChildHomeScreen from "./ChildHomeScreen";
import { useSelector } from "react-redux";
import COLORS from "../../theme/colors";
import { Entypo } from "@expo/vector-icons";
import PrimaryTitle from "../../components/titles/PrimaryTitle";

export default function HomeScreen() {
  const navigation = useNavigation();
  const userType = useSelector((state) => state.user.userType);
  const userInfo = useSelector((state) => state.user.userInfo);

  

  let page = userType === "child" ? <ChildHomeScreen /> : <ParentHomeScreen />;

  return (
    <View style={styles.root}>
      <PrimaryTitle
        title={`Dashboard`}
        secondaryTitle={"Learn More"}
        icon={<Entypo name="info" size={20} color={COLORS.primary} />}
        onPress={() => navigation.navigate("InfoScreen")}
      />
      {page}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
