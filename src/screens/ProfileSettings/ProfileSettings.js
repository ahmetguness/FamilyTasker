import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import PrimaryTitle from "../../components/titles/PrimaryTitle";
import { useSelector } from "react-redux";
import { styles } from "./styles";

export default function ProfileSettings() {
  const { userType, userInfo } = useSelector((state) => state.user);
  const [userName, setUserName] = useState(userInfo[`${userType}UserName`]);
  const [password, setPassword] = useState(userInfo[`${userType}Password`]);
  return (
    <View style={styles.root}>
      <PrimaryTitle title={"Profile Settings"} />
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Username</Text>
        <TextInput
          style={styles.inputArea}
          defaultValue={userName}
          onChangeText={setUserName}
        />
        <Text style={[styles.text, { marginTop: "5%" }]}>Password</Text>
        <TextInput
          style={styles.inputArea}
          defaultValue={password}
          onChangeText={setPassword}
        />
      </View>
    </View>
  );
}

