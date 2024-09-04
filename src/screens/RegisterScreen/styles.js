import { StyleSheet } from "react-native";
import COLORS from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  titleContainer: {
    marginHorizontal: "15%",
    marginTop: "15%",
  },
  titleText: {
    fontSize: 44,
    fontWeight: "bold",
  },
  inputContainer: {
    marginHorizontal: "10%",
    marginTop: "25%",
  },
  inputTitleText: {
    color: COLORS.gray3,
    fontSize: 20,
  },
  input: {
    borderBottomWidth: 1.5,
    borderColor: COLORS.primary,
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
  btnContainer: {
    marginTop: "15%",
    alignItems: "center",
  },
});
