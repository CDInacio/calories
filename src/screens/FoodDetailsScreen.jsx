import React from "react";
import { Text } from "react-native";

const FoodDetailsScreen = ({ route }) => {
  console.log(route.params.foodId);
  return <Text>FoodDetailsScreen</Text>;
};

export default FoodDetailsScreen;
