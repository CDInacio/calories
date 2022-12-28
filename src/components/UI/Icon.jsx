import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

const Icon = ({ name, color, size, style }) => {
  return (
    <View style={[style]}>
      <Ionicons name={name} size={size} color={color} />
    </View>
  );
};

export default Icon;
