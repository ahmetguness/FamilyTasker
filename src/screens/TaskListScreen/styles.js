import { StyleSheet } from "react-native";
import COLORS from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
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
  listContainer: {
    marginVertical: "5%",
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
    marginRight: 8,
  },
});
