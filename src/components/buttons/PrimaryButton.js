import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function PrimaryButton({ btnName, onPress, style, textStyle }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{btnName}</Text>
    </TouchableOpacity>
  );
}
