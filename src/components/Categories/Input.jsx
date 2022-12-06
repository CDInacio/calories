import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import Icon from "../UI/Icon";

const Input = () => {
  const [focus, setFocus] = useState(false);

  return (
    <View style={[styles.container]}>
      <Icon style={styles.icon} name="search" size={25} color="#898989" />
      <TextInput
        // onFocus={() => setFocus(true)}
        // onBlur={() => setFocus(false)}
        style={styles.input}
        autoCapitalize="none"
        placeholder="Pesquise por um alimento"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  container: {
    position: "relative",
    marginHorizontal: 15,
    marginTop: 80,
  },
  input: {
    borderWidth: 1,
    borderColor: "#C2C1C1",
    borderRadius: 5,
    padding: 8,
    // backgroundColor: "#E6E6E6",
    color: "#707070",
    fontSize: 16,
    paddingLeft: 50,
  },
  focus: {
    borderRadius: 5,
    padding: 8,
    backgroundColor: "#9B9B9B",
    color: "#707070",
    fontSize: 16,
  },
});
