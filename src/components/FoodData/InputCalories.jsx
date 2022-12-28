import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const InputCalories = ({ onPress }) => {
  const [value, setValue] = useState();

  const handlePress = () => {
    onPress(value);
  };
  return (
    <View>
      <Text style={styles.header}>
        Informe, em gramas, a quantidade desejada:
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          onSubmitEditing={handlePress}
          keyboardType="number-pad"
          onChangeText={(enteredValue) => setValue(enteredValue)}
          style={styles.input}
          placeholder="Exemplo: 100"
        />
        <Pressable onPress={handlePress} style={styles.icon}>
          <FontAwesome5 name="equals" size={40} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default InputCalories;

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",

    padding: 5,
    borderRadius: 5,
    flex: 5,
  },
  inputContainer: {
    flexDirection: "row",
  },
  header: {
    padding: 5,
    borderRadius: 3,
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 30,
    textAlign: "center",
  },
});
