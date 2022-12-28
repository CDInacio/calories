import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import CategoriesList from "../components/Categories/CategoriesList";
import Input from "../components/Categories/Input";
import Icon from "../components/UI/Icon";

const CategoriesOverview = ({ navigation }) => {
  const handleSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.searchContainer}>
        <Pressable onPress={handleSearch}>
          <Icon style={[styles.icon]} name="search" size={30} color="#ccc" />
        </Pressable>
      </View>
      <Text style={styles.text}>Categorias</Text>
      <CategoriesList />
    </View>
  );
};

export default CategoriesOverview;

const styles = StyleSheet.create({
  text: {
    marginBottom: 30,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#262626",
  },
  rootContainer: {
    flex: 1,
  },
  searchContainer: {
    marginTop: 40,
    marginHorizontal: 15,
    alignItems: "flex-end",
  },
});
