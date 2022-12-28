import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import CustomButton from "../UI/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthForm = ({ isLogin, onsubmit }) => {
  const tk = AsyncStorage.getItem("userToken");
  console.log(tk);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const handleSetEmail = (enteredValue) => {
    setEnteredEmail(enteredValue);
  };

  const handleSetPassword = (enteredValue) => {
    setEnteredPassword(enteredValue);
  };

  const handleSubmit = () => {
    const values = {
      email: enteredEmail,
      password: enteredPassword,
    };

    onsubmit(values);

    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authMode}>{isLogin ? "LOGIN" : "CADASTRO"}</Text>
      {/* {!isLogin && (
        <Input
          onChangeText={handleSetName}
          placeholder="Nome"
          icon="person-outline"
        />
      )} */}
      <Input
        onChangeText={handleSetEmail}
        placeholder="Email"
        capitalize="none"
        icon="at"
        value={enteredEmail}
      />
      <Input
        onChangeText={handleSetPassword}
        placeholder="Senha"
        keyboardType="email-addressd"
        icon="lock-closed-outline"
        value={enteredPassword}
      />
      <CustomButton
        onPress={handleSubmit}
        pressedBtn={styles.pressedBtn}
        btnText={styles.btnText}
        button={styles.button}
      >
        {!isLogin ? "Cadastrar-se" : "Entrar"}
      </CustomButton>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  aditionalAuth: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  pressedBtn: {
    backgroundColor: "#B50342",
  },
  text: {
    opacity: 0.75,
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#F50057",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  authContainer: {
    paddingHorizontal: 40,
  },
  authMode: {
    marginBottom: 30,
    fontWeight: "bold",
    fontSize: 30,
    color: "#2F2E41",
  },
});
