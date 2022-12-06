import React from "react";
import { StyleSheet, View } from "react-native";

import { FOODS } from "../utils/dataset";
import SubcategoriesList from "../components/Subcategories/SubcategoriesList";

import { CATEGORIES } from "../utils/categories";
import FoodList from "../components/FoodList";
import Hero from "../components/UI/Hero";

const SingleCategoryScreen = ({ route, navigation }) => {
  const { id } = route.params;

  // useLayoutEffect(() => {
  //   const categoryName = CATEGORIES.find(
  //     (category) => category.id === id
  //   ).category;

  //   navigation.setOptions({ title: categoryName });
  // }, [navigation]);

  const handleGoback = () => {
    navigation.goBack();
  };

  const selectedCategory = CATEGORIES.find((cat) => cat.id === id);

  const foods = FOODS.filter(
    (food) => food.category === selectedCategory.category
  );

  // get only the first element of the array, because if the first element has a subcategory
  // the others will have as well
  const subcategory = foods[0]?.subcategory;

  let finalSubcategories;

  if (subcategory) {
    // get all subcategories of a given categorie (may repeted values)
    const allSubcategories = foods.map((foods) => foods.subcategory);

    // remove repeted values
    finalSubcategories = [...new Set(allSubcategories)];
  }

  return (
    <View style={styles.rootContainer}>
      <Hero
        imageUrl={selectedCategory.imageUrl}
        title={selectedCategory.category}
        onPress={handleGoback}
      />
      {subcategory && <SubcategoriesList data={finalSubcategories} />}
      <FoodList foods={foods} itemLength={foods.length} />
    </View>
  );
};

export default SingleCategoryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  icon: {
    width: 45,
    height: 45,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6E6E6",
  },
  iconsContainer: {
    marginHorizontal: 15,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 250,
  },
  text: {
    paddingLeft: 20,
    marginTop: 100,
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
});
