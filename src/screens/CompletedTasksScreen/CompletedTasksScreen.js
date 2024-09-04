import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import PrimaryTitle from "../../components/titles/PrimaryTitle";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import COLORS from "../../theme/colors";

export default function CompletedTasksScreen() {
  const [completedTasks, setCompletedTasks] = useState("");

  return (
    <View style={styles.root}>
      <PrimaryTitle title={"Completed Tasks"} />
      {completedTasks.length < 1 ? (
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
      ) : null}
    </View>
  );
}
