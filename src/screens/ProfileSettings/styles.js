import { StyleSheet } from "react-native";
import COLORS from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputContainer: {
    width: "90%",
    marginHorizontal: "5%",
    marginTop: "8%",
  },
  inputArea: {
    borderBottomWidth: 1.5,
    borderColor: COLORS.primary,
  },
  text: {
    color: COLORS.gray3,
    fontSize: 20,
  },
});
