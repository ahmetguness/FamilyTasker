import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import COLORS from "../../theme/colors";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { updateTasks, updateUserConnectedChild } from "../../redux/UserSlice";
import {
  connectUsers,
  fetchTasksByChildId,
} from "../../services/firebaseService";

const ParentHomeScreen = () => {
  const navigation = useNavigation();
  const dispatcher = useDispatch();
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const user = useSelector((state) => state.user);
  const [tasks, setTasks] = useState([]);

  const userNameField = `${user.userType}UserName`;
  const userName = user.userInfo[userNameField];

  const id = "ZPSD6pT3SB8ApMWl6JFt";

  console.log(user.userConnectedChild);

  useEffect(() => {
    const renderHandle = async () => {
      await connectUsers(user.userInfo.id, id);
      dispatcher(updateUserConnectedChild(id));
      const tasks = await fetchTasksByChildId(id);
      setTasks(tasks);
      dispatcher(updateTasks(tasks));
    };
    renderHandle();
  }, []);

  const renderManagementItem = (icon, iconName, text, onPress) => (
    <TouchableOpacity
      style={[styles.managementListItem, { marginRight: 10 }]}
      onPress={onPress}
    >
      {React.createElement(icon, { name: iconName, size: 24, color: "white" })}
      <Text style={styles.managementText}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.root}>
      <View style={[styles.targetCheckContainer, { height: 200 }]}>
        <View style={styles.targetTextContainer}>
          <Text style={styles.targetText}>Target Check</Text>
          <Entypo name="line-graph" size={24} color="white" />
        </View>
        <View style={styles.collectedPointContainer}>
          <Text style={styles.collectedPointText}>500 points</Text>
        </View>
        <View style={styles.progressBarContainer}>
          <Progress.Bar
            progress={0.6}
            width={windowWidth * 0.6}
            height={10}
            color="#6a1b9a"
            unfilledColor="#ddd"
            borderWidth={0}
          />
          <Text style={styles.progressText}>60%</Text>
        </View>
        <View style={styles.dailyPointsContainer}>
          <Text style={styles.dailyPointsText}>Daily gained points: 123</Text>
        </View>
      </View>
      <View style={styles.managementContainer}>
        <Text style={styles.managementTitle}>Management</Text>
        <ScrollView
          style={styles.managementScroll}
          horizontal
          contentContainerStyle={styles.managementContent}
          showsHorizontalScrollIndicator={false}
        >
          {renderManagementItem(Entypo, "list", "See Task List", () =>
            navigation.navigate("AppBottomTabNav")
          )}
          {renderManagementItem(Entypo, "add-to-list", "Add to List", () =>
            navigation.navigate("AddTaskScreen")
          )}
          {renderManagementItem(FontAwesome5, "award", "Award List", () =>
            navigation.navigate("AwardListScreen")
          )}
          {renderManagementItem(
            MaterialCommunityIcons,
            "trophy-award",
            "Add to Award List",
            () => console.log("Award List")
          )}
          {renderManagementItem(AntDesign, "qrcode", "Connect with QR", () =>
            navigation.navigate("QRScanner")
          )}
          {renderManagementItem(
            MaterialCommunityIcons,
            "connection",
            "Connect with ID",
            () => console.log("Connect")
          )}
          {renderManagementItem(AntDesign, "disconnect", "Disconnect", () =>
            console.log("Disconnect")
          )}
          {renderManagementItem(Feather, "settings", "Profile Settings", () =>
            navigation.navigate("ProfileSettings")
          )}
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: "5%",
          marginVertical: "5%",
          width: "90%",
          backgroundColor: COLORS.primary,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
          padding: "5%",
        }}
      >
        <Text style={{ color: "white", fontSize: 26, marginBottom: "15%" }}>
          Welcome {userName.toUpperCase()}!!
        </Text>
        <Text style={{ color: COLORS.gray2, fontSize: 18 }}>
          Here is the connected child info:
        </Text>
        <View style={{ marginTop: "5%" }}>
          <Text
            style={{ color: COLORS.gray2, marginBottom: "3%", fontSize: 18 }}
          >
            ID: blalbalbalblal
          </Text>
          <Text style={{ color: COLORS.gray2, fontSize: 18 }}>
            Name: blballablalba
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ParentHomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  targetCheckContainer: {
    width: "90%",
    borderRadius: 15,
    backgroundColor: COLORS.primary,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: "5%",
    marginTop: "5%",
  },
  targetTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  targetText: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.gray5,
  },
  collectedPointContainer: {
    marginBottom: 20,
  },
  collectedPointText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  progressText: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
  },
  dailyPointsContainer: {
    marginTop: 10,
  },
  dailyPointsText: {
    fontSize: 16,
    color: "white",
  },
  managementContainer: {
    marginHorizontal: "5%",
    marginTop: "5%",
  },
  managementTitle: {
    fontSize: 20,
  },
  managementScroll: {
    marginTop: "3%",
  },
  managementContent: {
    paddingHorizontal: 10,
  },
  managementListItem: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  managementText: {
    marginTop: "3%",
    color: COLORS.white,
  },
});
