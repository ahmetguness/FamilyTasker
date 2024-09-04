import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "5%",
  },
  backButton: {
    marginRight: 10,
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  itemContainer: {
    marginBottom: 20,
  },
  itemKey: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6200EE",
  },
  itemValue: {
    fontSize: 16,
    color: "#333",
  },
});
