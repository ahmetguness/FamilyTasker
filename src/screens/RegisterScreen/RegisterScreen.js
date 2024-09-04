import {
  View,
  Text,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../../theme/colors";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { createAccount } from "../../services/firebaseService";
import { useSelector } from "react-redux";
import { styles } from "./styles";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    try {
      if (
        password === verifyPassword &&
        userName.length > 5 &&
        password.length > 5
      ) {
        setLoading(true);
        await createAccount(user.userType, userName, password);
        Alert.alert("Account created succesfully");
        setLoading(false);
        setUserName("");
        setPassword("");
        setVerifyPassword("");
        navigation.navigate("LoginScreen");
      } else if (
        password !== verifyPassword &&
        userName.length > 5 &&
        password.length > 5
      ) {
        Alert.alert("Passwords Must be the Same");
      } else if (
        password === verifyPassword &&
        (userName.length < 5 || password.length < 5)
      ) {
        Alert.alert("Username and Password Must be Greater Than 5 Characters");
      } else if (
        password != verifyPassword &&
        (userName.length < 5 || password.length < 5)
      ) {
        Alert.alert(
          "Username and Password Must be Greater Than 5 Characters and Passwords Must be the Same"
        );
      }
      setUserName("");
      setPassword("");
      setVerifyPassword("");
    } catch (error) {
      setLoading(false);
      setUserName("");
      setPassword("");
      setVerifyPassword("");
      console.error("Error during registration:", error);
    }
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Create</Text>
        <Text style={[styles.titleText, { marginLeft: "18%" }]}>Account</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitleText}>Create an Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserName}
          value={userName}
        />
        <Text style={[styles.inputTitleText, { marginTop: "20%" }]}>
          Create a Password
        </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
        <Text style={[styles.inputTitleText, { marginTop: "20%" }]}>
          Verify Password
        </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={setVerifyPassword}
          value={verifyPassword}
        />
      </View>
      <View style={styles.btnContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <PrimaryButton
            btnName={"Sign Up"}
            style={styles.btn}
            textStyle={styles.btnText}
            onPress={() => handleRegister()}
          />
        )}
      </View>
    </ScrollView>
  );
}
