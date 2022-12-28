import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";

import KeyboardAvoidingWrapper from "../KeyboardAvoidingWrapper";
import CustomButton from "../UI/CustomButton";
import AuthForm from "./AuthForm";

const AuthContent = ({ isLogin, onAuth }) => {
  const [inputIsInvalid, setInputIsInvalid] = useState({
    email: false,
    password: false,
  });

  const navigation = useNavigation();

  const handleChangeAuthMode = () => {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");
    }
  };

  const handleSubmit = (enteredValues) => {
    const emailIsValid = enteredValues.email.includes("@");
    const passwordIsValid = enteredValues.password.length > 6;

    if (!emailIsValid || !passwordIsValid) {
      Alert.alert(
        "Credenciais inválidas",
        "Por favor, preencha os campos novamente"
      );
      setInputIsInvalid({ email: !emailIsValid, password: !passwordIsValid });
      return;
    }

    const values = {
      email: enteredValues.email,
      password: enteredValues.password,
    };

    onAuth(values);
  };

  return (
    <KeyboardAvoidingWrapper>
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={
              isLogin
                ? require("../../assets/login.png")
                : require("../../assets/signup.png")
            }
          />
        </View>
        <AuthForm onsubmit={handleSubmit} isLogin={isLogin} />
        <View style={styles.aditionalAuth}>
          <Text style={styles.text}>
            {!isLogin ? "Já possui uma conta?" : "Ainda não possui uma conta?"}
          </Text>
          <CustomButton
            onPress={handleChangeAuthMode}
            btnText={{ color: "#F50057", fontWeight: "bold" }}
          >
            {!isLogin ? " Entre aqui" : " Cadastre-se aqui"}
          </CustomButton>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

export default AuthContent;

const styles = StyleSheet.create({
  aditionalAuth: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  authAction: {
    color: "#F50057",
    fontWeight: "bold",
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
  imageContainer: {
    marginTop: 60,
    alignSelf: "center",
    width: 300,
    height: 330,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
