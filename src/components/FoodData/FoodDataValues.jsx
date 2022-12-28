import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ProgressBar from "react-native-animated-progress";

import Icon from "../UI/Icon";
import InputCalories from "./InputCalories";

const FoodDataValues = ({
  name,
  calories,
  amount,
  carbs,
  protein,
  totalFat,
  fiber,
  sodium,
  carbsPerc,
  fatPerc,
  proteinPerc,
}) => {
  const navigation = useNavigation();

  const [caloriesAmount, setCaloriesAmount] = useState("");

  const handleCaloriesAmount = (caloriesValue) => {
    setCaloriesAmount(caloriesValue);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <Pressable
        style={({ pressed }) => [styles.buttonClose, pressed && styles.pressed]}
        onPress={handleGoBack}
      >
        <Icon name="chevron-back" size={40} color="#ccc" />
      </Pressable>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Medidas</Text>
        <Text style={styles.amount}>Quantiadade: {amount}g</Text>
      </View>
      <View style={styles.dataContainer}>
        <View>
          <Text style={styles.measure}>Calorias</Text>
          <Text style={styles.measure}>Carboidratos</Text>
          <Text style={styles.measure}>Proteína</Text>
          <Text style={styles.measure}>Gordura Total</Text>
          <Text style={styles.measure}>Fibra</Text>
          <Text style={styles.measure}>Sódio</Text>
        </View>
        <View>
          <Text style={styles.measure}>
            {!caloriesAmount
              ? calories?.toFixed(2)
              : (calories * caloriesAmount)?.toFixed(2)}
            kcal
          </Text>
          <Text style={styles.measure}>
            {!caloriesAmount
              ? carbs?.toFixed(2)
              : (carbs * caloriesAmount)?.toFixed(2)}
            g
          </Text>
          <Text style={styles.measure}>
            {!caloriesAmount
              ? protein?.toFixed(2)
              : (protein * caloriesAmount).toFixed(2)}
            g
          </Text>
          <Text style={styles.measure}>
            {!caloriesAmount
              ? totalFat?.toFixed(2)
              : (totalFat * caloriesAmount).toFixed(2)}
            g
          </Text>
          <Text style={styles.measure}>
            {!caloriesAmount
              ? fiber?.toFixed(2)
              : (fiber * caloriesAmount).toFixed(2)}
            g
          </Text>
          <Text style={styles.measure}>
            {!caloriesAmount
              ? sodium?.toFixed(2)
              : (sodium * caloriesAmount).toFixed(2)}
            mg
          </Text>
        </View>
      </View>
      <Text style={styles.header}>Distribuição Calórica</Text>
      <View style={styles.progressContainer}>
        <View style={styles.progress}>
          <Text style={styles.nutrient}>Carboidrato: {carbsPerc}%</Text>
          <ProgressBar
            progress={carbsPerc}
            height={7}
            backgroundColor="#FAEDCD"
          />
        </View>
        <View style={styles.progress}>
          <Text style={styles.nutrient}>Gordura: {fatPerc}%</Text>
          <ProgressBar
            progress={fatPerc}
            height={7}
            backgroundColor="#FFBF00"
          />
        </View>
        <View style={styles.progress}>
          <Text style={styles.nutrient}>Proteína: {proteinPerc}%</Text>
          <ProgressBar
            progress={proteinPerc}
            height={7}
            backgroundColor="#34a0a4"
          />
        </View>
      </View>
      <InputCalories onPress={handleCaloriesAmount} />
    </View>
  );
};

export default FoodDataValues;

const styles = StyleSheet.create({
  measure: {
    marginBottom: 5,
    opacity: 0.8,
  },
  nutrient: {
    marginBottom: 5,
  },
  progress: {
    width: "100%",
    marginBottom: 10,
  },
  progressContainer: {
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  header: {
    padding: 5,
    borderRadius: 3,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  amount: {
    opacity: 0.65,
    fontSize: 14,
  },
  headerContainer: {
    marginVertical: 30,
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 15,
  },
  line: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "100%",
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
