import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
import React from "react";
import PrimaryTitle from "../../components/titles/PrimaryTitle";
import TaskListCard from "../../components/cards/TaskListCard";

export default function AwardListScreen() {
  const dummy_arr = [1, 2, 3, 4, 5];

  return (
    <ScrollView style={styles.root}>
      <PrimaryTitle title={"Award List"} />
      <View>
        {/* <FlatList
          data={dummy_arr}
          renderItem={({ item }) => <TaskListCard item={item} />}
        /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
