import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CategoriesList from "../components/Categories/CategoriesList";
import Input from "../components/Categories/Input";

const CategoriesOverview = ({ navigation }) => {
  return (
    <View style={styles.rootContainer}>
      <Input />
      <Text style={styles.text}>Categorias</Text>
      <CategoriesList />
    </View>
  );
};

export default CategoriesOverview;

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#262626",
  },
  rootContainer: {
    flex: 1,
  },
});
