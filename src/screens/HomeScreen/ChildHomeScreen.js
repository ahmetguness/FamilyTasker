import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
  Modal,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import QRCode from "react-native-qrcode-svg";

export default function ChildHomeScreen() {
  const [createQR, setCreateQR] = useState(false);
  const navigation = useNavigation();
  const user = useSelector((state) => state.user);

  return (
    <ScrollView style={styles.root}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: "5%",
        }}
      >
        <TouchableOpacity onPress={() => setCreateQR(true)}>
          <Text>Show QR</Text>
        </TouchableOpacity>

        <Modal
          visible={createQR}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setCreateQR(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.qrContainer}>
              <QRCode
                value={user.userInfo.id}
                size={200}
                color={COLORS.primary}
                backgroundColor="white"
              />
              <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                  style={styles.hideQRButton}
                  onPress={() => setCreateQR(false)}
                >
                  <Text style={styles.hideQRButtonText}>Hide QR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <Button
        title="next"
        onPress={() => navigation.navigate("AppBottomTabNav")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  qrContainer: {
    width: 250,
    height: 300,
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  hideQRButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  hideQRButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
