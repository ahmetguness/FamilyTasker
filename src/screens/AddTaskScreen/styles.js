import { StyleSheet } from "react-native";
import COLORS from "../../theme/colors";

export const styles = StyleSheet.create({
    root: {
      flex: 1,
    },
    inputContainer: {
      width: "90%",
      marginHorizontal: "5%",
      marginTop: "20%",
    },
    textNameText: {
      color: COLORS.gray3,
      fontSize: 20,
    },
    textNameInput: {
      borderBottomWidth: 1.5,
      borderColor: COLORS.primary,
    },
    textDescriptionInput: {
      borderWidth: 1.5,
      borderColor: COLORS.primary,
      marginTop: "5%",
      height: 200,
      padding: 10,
      textAlignVertical: "top",
    },
    photoContainer: {
      width: "90%",
      marginHorizontal: "5%",
      marginTop: "5%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    imgContainer: {
      height: 200,
      width: 200,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      borderWidth: 1.5,
      borderColor: COLORS.primary,
    },
    image: {
      height: 200,
      width: 200,
      borderWidth: 1.5,
      borderColor: COLORS.primary,
    },
    addPhotoBtn: {
      height: 60,
      width: 120,
      borderRadius: 15,
      backgroundColor: COLORS.primary,
      alignItems: "center",
      justifyContent: "center",
    },
    addPhotoTxt: {
      color: COLORS.white,
    },
    submitBtn: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: "10%",
      backgroundColor: COLORS.primary,
      width: 100,
      height: 60,
      borderRadius: 15,
    },
    submitBtnText: {
      color: COLORS.white,
    },
    activityIndicator: {
      marginTop: "10%",
    },
  });
  