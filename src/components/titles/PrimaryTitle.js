import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import COLORS from "../../theme/colors";

export default function PrimaryTitle({ title, onPress, secondaryTitle, icon }) {
  const { height: windowHeight } = useWindowDimensions();

  return (
    <View style={[styles.titleContainer, { height: windowHeight * 0.08 }]}>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity style={styles.moreInfoButton} onPress={onPress}>
        {secondaryTitle && (
          <Text style={styles.moreInfoText}>{secondaryTitle}</Text>
        )}
        {icon && icon}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: "5%",
    backgroundColor: COLORS.lightGray,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleText: {
    color: COLORS.primary,
    fontSize: 28,
    fontWeight: "bold",
  },
  moreInfoButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  moreInfoText: {
    fontSize: 18,
    color: COLORS.primary,
    marginRight: 5,
  },
});
