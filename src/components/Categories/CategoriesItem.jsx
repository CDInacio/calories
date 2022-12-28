import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import ImageCard from "../UI/ImageCard";

const CategoriesItem = ({ id, category, imageUrl }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Category", { id: id });
  };

  return (
    <ImageCard
      itemContainer={styles.itemContainer}
      imageUrl={imageUrl}
      pressedStl={styles.pressed}
      image={styles.image}
      onPress={handlePress}
      text={category}
      textStl={styles.text}
    />
  );
};

export default CategoriesItem;

const styles = StyleSheet.create({
  itemContainer: {
    position: "relative",
    marginHorizontal: 15,
    height: 150,
    marginBottom: 15,
    borderRadius: 3,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "white",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    position: "absolute",
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    bottom: 40,
    left: 10,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
