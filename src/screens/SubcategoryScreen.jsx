import React from "react";
import { Text, View, StyleSheet } from "react-native";
import FoodList from "../components/FoodList";
import Hero from "../components/UI/Hero";

import { FOODS } from "../utils/dataset";
import { SUBCATEGORIES } from "../utils/subcategories";

const SubcategoryScreen = ({ route, navigation }) => {
  const selectedSubcategoryName = route.params.subcatName;

  const selectedSubcategory = SUBCATEGORIES.find(
    (subcategory) => subcategory.name === selectedSubcategoryName
  );

  const foods = FOODS.filter(
    (food) => food.subcategory === selectedSubcategoryName
  );

  const category = foods[0].category;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.rootContainer}>
      <Hero
        imageUrl={selectedSubcategory.imageUrl}
        title={category}
        subtitle={selectedSubcategory.name}
        onPress={handleGoBack}
      />
      <FoodList foods={foods} itemLength={foods.length} />
    </View>
  );
};

export default SubcategoryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
