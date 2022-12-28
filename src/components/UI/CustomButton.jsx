import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const CustomButton = ({ onPress, children, button, btnText, pressedBtn }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [button, pressed ? pressedBtn : null]}
    >
      <Text style={btnText}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  preessed: {},
});
