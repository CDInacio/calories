import React from "react";
import FoodDataOverview from "../components/FoodData/FoodDataOverview";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import { FOODS } from "../utils/dataset";

const SingleFoodScreen = ({ route }) => {
  const { id } = route.params;
  const clickedFood = FOODS.find((food) => food.id === id);

  return (
    <KeyboardAvoidingWrapper>
      <FoodDataOverview food={clickedFood} />
    </KeyboardAvoidingWrapper>
  );
};

export default SingleFoodScreen;
