import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Input = ({
  placeholder,
  icon,
  keyboardType,
  capitalize,
  onChangeText,
  value,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Ionicons style={styles.icon} name={icon} size={24} color="#ccc" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        type
        placeholder={placeholder}
        keyboardType={keyboardType ? keyboardType : "default"}
        autoCapitalize={capitalize ? capitalize : "sentences"}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    // width: "70%",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 7,
    marginBottom: 10,
    flex: 1,
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
});
