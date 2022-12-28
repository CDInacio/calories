import React from "react";
import FoodDataValues from "./FoodDataValues";

const FoodDataOverview = ({ food }) => {
  const measures = food?.measures;
  const calDistribution = food?.caloricDistribution;

  const foodDataProps = {
    name: food?.name,
    amount: food?.amount,
    calories: measures?.calories,
    carbs: measures?.carbs,
    protein: measures?.protein,
    totalFat: measures?.totalFat,
    fiber: measures?.fiber,
    sodium: measures?.sodium,
    carbsPerc: calDistribution?.carbs,
    fatPerc: calDistribution?.fat,
    proteinPerc: calDistribution?.protein,
  };

  return <FoodDataValues {...foodDataProps} />;
};

export default FoodDataOverview;
