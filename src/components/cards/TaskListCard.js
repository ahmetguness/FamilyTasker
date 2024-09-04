import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import COLORS from "../../theme/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSelector } from "react-redux";

export default function TaskListCard({ item, deleteFun, confirmFun }) {
  const userType = useSelector((state) => state.user.userType);

  const renderItem = (data) => (
    <View style={styles.rowFront}>
      <Image source={{ uri: data.item.taskImg }} style={styles.img} />
      <Text style={styles.text}>{data.item.taskName}</Text>
    </View>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      {userType === "parent" ? (
        <>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            onPress={deleteFun}
          >
            <MaterialIcons name="delete" size={32} color="red" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => console.log("Complete Pressed")}
          >
            <AntDesign name="checkcircle" size={26} color="green" />
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnOnlyChild]}
          onPress={() => console.log("Complete Pressed")}
        >
          <AntDesign name="checkcircle" size={26} color="green" />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <SwipeListView
      data={[item]}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={userType === "parent" ? -150 : -75}
      disableRightSwipe
    />
  );
}

const styles = StyleSheet.create({
  rowFront: {
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    height: 80,
    margin: 5,
    alignItems: "center",
    // justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: 15,
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    margin: 5,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: COLORS.red,
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: COLORS.green,
    right: 0,
  },
  backRightBtnOnlyChild: {
    backgroundColor: COLORS.green,
    right: 0,
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
  },
  img: {
    height: 60,
    width: 60,
    marginRight: "10%",
    borderRadius: 15,
  },
});
