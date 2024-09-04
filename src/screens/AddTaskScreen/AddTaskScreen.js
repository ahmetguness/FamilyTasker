import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import PrimaryTitle from "../../components/titles/PrimaryTitle";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import COLORS from "../../theme/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { addTask, fetchTasksByChildId } from "../../services/firebaseService";
import { useDispatch, useSelector } from "react-redux";
import { updateTasks } from "../../redux/UserSlice";
import { styles } from "./styles";

export default function AddTaskScreen() {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user);
  const dispatcher = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await fetchTasksByChildId(user.userConnectedChild);
        setTasks(tasks);
        dispatcher(updateTasks(tasks));
      } catch (error) {
        console.error("Error during getting tasks:", error);
      }
    };

    fetchTasks();
  }, [user.userInfo.id]);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const submitHandler = async () => {
    setLoading(true);
    await addTask(
      user.userConnectedChild,
      taskName,
      taskDescription,
      selectedImage
    );
    const fetchTasks = async () => {
      try {
        const tasks = await fetchTasksByChildId(user.userConnectedChild);
        setTasks(tasks);
        dispatcher(updateTasks(tasks));
      } catch (error) {
        console.error("Error during getting tasks:", error);
      }
    };
    fetchTasks();
    setLoading(false);
    Alert.alert("Task added successfully");
    navigation.navigate("AppBottomTabNav");
  };

  return (
    <ScrollView style={styles.root}>
      <PrimaryTitle
        title={"Add Task"}
        secondaryTitle={"Task Suggestions"}
        icon={<FontAwesome name="tasks" size={24} color="#6200EE" />}
        onPress={() => console.log("Task Suggestions")}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.textNameText}>Task Name</Text>
        <TextInput style={styles.textNameInput} onChangeText={setTaskName} />
        <Text style={[styles.textNameText, { marginTop: "10%" }]}>
          Task Description
        </Text>
        <TextInput
          style={styles.textDescriptionInput}
          multiline={true}
          onChangeText={setTaskDescription}
        />
      </View>
      <View style={styles.photoContainer}>
        <PrimaryButton
          btnName={"Add Photo (Optional)"}
          onPress={pickImage}
          style={styles.addPhotoBtn}
          textStyle={styles.addPhotoTxt}
        />
        <View style={styles.imgContainer}>
          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={styles.image} />
          )}
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
            style={styles.activityIndicator}
          />
        ) : (
          <PrimaryButton
            btnName={"Submit"}
            style={styles.submitBtn}
            textStyle={styles.submitBtnText}
            onPress={submitHandler}
          />
        )}
      </View>
    </ScrollView>
  );
}
