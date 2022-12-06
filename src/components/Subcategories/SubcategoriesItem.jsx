import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";

import { SUBCATEGORIES } from "../../utils/subcategories";
import ImageCard from "../UI/ImageCard";

const SubcategoriesItem = ({ item }) => {
  const navigation = useNavigation();

  const selectedSubcat = SUBCATEGORIES.find((subcat) => subcat.name === item);

  const handleSelectSubcategory = () => {
    navigation.navigate("Subcategory", { subcatName: item });
  };

  return (
    <ImageCard
      itemContainer={styles.itemContainer}
      imageUrl={selectedSubcat.imageUrl}
      image={styles.image}
      pressedStl={styles.pressed}
      subtCatTitle={selectedSubcat.name}
      subcatTitleStl={styles.subcatTitleStl}
      onPress={handleSelectSubcategory}
    />
  );
};

export default SubcategoriesItem;

const styles = StyleSheet.create({
  subcatTitleStl: {
    alignSelf: "center",
    flex: 1,
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
    color: "white",
  },
  itemContainer: {
    position: "relative",
    marginRight: 10,
    // marginTop: 10,
    // marginBottom: 15,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 4,
    backgroundColor: "white",
    overflow: "hidden",
    width: 120,
    height: 190,
  },
  pressed: {
    opacity: 0.75,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
});
