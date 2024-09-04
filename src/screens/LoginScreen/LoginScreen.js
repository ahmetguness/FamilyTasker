import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../../theme/colors";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../../services/firebaseService";
import { updateUserInfo } from "../../redux/UserSlice";

export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatcher = useDispatch();
  const userType = useSelector((state) => state.user.userType);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const isValid = await authenticateUser(userType, userName, password);
      setLoading(false);

      if (isValid.isValid) {
        dispatcher(updateUserInfo(isValid.userInfo));
        navigation.navigate("HomeScreen");
        setPassword("");
        setUserName("");
      } else if (userName.length === 0 || password.length === 0) {
        Alert.alert("Enter Username and Password");
        setPassword("");
        setUserName("");
      } else {
        Alert.alert("Username or Password Incorrect");
        setPassword("");
        setUserName("");
      }
    } catch (error) {
      setLoading(false);
      Alert.alert("An error occurred during login", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView>
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>Welcome!</Text>
        <Text style={styles.title2}>Enter your Username & Password</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitleText}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserName}
          value={userName}
        />
        <Text style={[styles.inputTitleText, { marginTop: "20%" }]}>
          Password
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          secureTextEntry={true}
          value={password}
        />
      </View>
      <View style={styles.btnContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <>
            <PrimaryButton
              btnName={"Login"}
              style={styles.btn}
              textStyle={styles.btnText}
              onPress={() => handleLogin()}
            />
            <PrimaryButton
              btnName={"Or create a new account"}
              textStyle={{ color: "black" }}
              style={{ marginBottom: "10%" }}
              onPress={() => navigation.navigate("RegisterScreen")}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: "18%",
    marginHorizontal: "15%",
  },
  title1: {
    fontSize: 44,
    fontWeight: "bold",
  },
  title2: {
    fontSize: 14,
    color: COLORS.primary,
  },
  inputContainer: {
    marginHorizontal: "10%",
    marginTop: "40%",
  },
  inputTitleText: {
    color: COLORS.gray3,
    fontSize: 20,
  },
  input: {
    borderBottomWidth: 1.5,
    borderColor: COLORS.primary,
  },
  btnContainer: {
    marginTop: "15%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: COLORS.primary,
    width: "25%",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "4%",
  },
  btnText: {
    color: COLORS.white,
  },
});
