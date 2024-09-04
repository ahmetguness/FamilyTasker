import {
  View,
  FlatList,
  useWindowDimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import TaskListCard from "../../components/cards/TaskListCard";
import COLORS from "../../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";
import { deleteTaskFromFirestore } from "../../services/firebaseService";
import { deleteTask } from "../../redux/UserSlice";

export default function TaskListScreen() {
  const { height: windowHeight } = useWindowDimensions();
  const user = useSelector((state) => state.user);
  const navigation = useNavigation();
  const dispatcher = useDispatch();
  console.log(user.userTasks);

  const deleteHandle = async (item) => {
    await deleteTaskFromFirestore(user.userConnectedChild, item.id);
    dispatcher(deleteTask(item.id));
  };

  return (
    <View style={styles.root}>
      <View style={[styles.titleContainer, { height: windowHeight * 0.08 }]}>
        <Text style={styles.titleText}>Task List</Text>
        {user.userType === "parent" && (
          <TouchableOpacity
            style={styles.moreInfoButton}
            onPress={() => navigation.navigate("AddTaskScreen")}
          >
            <Text style={styles.moreInfoText}>Add Task</Text>
            <Entypo name="add-to-list" size={24} color="#6200EE" />
          </TouchableOpacity>
        )}
      </View>
      {user.userTasks && user.userTasks.length > 0 ? (
        <View style={styles.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={user.userTasks}
            renderItem={({ item }) => (
              <TaskListCard item={item} deleteFun={() => deleteHandle(item)} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      ) : (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <MaterialCommunityIcons
            name="checkbox-blank-off-outline"
            size={40}
            color="#6200EE"
          />
          <Text
            style={{ color: COLORS.primary, fontSize: 20, marginTop: "3%" }}
          >
            There is no item in the list.
          </Text>
        </View>
      )}
    </View>
  );
}
