import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../theme/colors";
import { useDispatch } from "react-redux";
import { updateUserType } from "../../redux/UserSlice";
import { useNavigation } from "@react-navigation/native";

export default function SelectScreen() {
  const dispatcher = useDispatch();
  const navigation = useNavigation();

  const nextPageHandler = (userType) => {
    dispatcher(updateUserType(userType));
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.innerContainer}
        onPress={() => nextPageHandler("parent")}
      >
        <Text style={styles.innerText}>Login as a Parent</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.innerContainer2}
        onPress={() => nextPageHandler("child")}
      >
        <Text style={styles.innerText}>Login as a Child</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
  innerContainer: {
    height: "100%",
    width: "50%",
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer2: {
    height: "100%",
    width: "50%",
    backgroundColor: COLORS.lilac2,
    justifyContent: "center",
    alignItems: "center",
  },
  innerText: { fontSize: 22 },
});
