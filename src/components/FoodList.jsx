import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import FoodItem from "./FoodItem";

const FoodList = ({ itemLength, foods }) => {
  const navigation = useNavigation();

  const handleSelectFood = (foodId) => {
    navigation.navigate("SingleFood", { id: foodId });
  };

  return (
    <View style={styles.listContainer}>
      <View style={styles.borderBottom}>
        <View style={styles.qtyInfo}>
          <Text style={styles.numItems}>{itemLength} item(s)</Text>
        </View>
      </View>
      <FlatList
        data={foods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FoodItem
            onPress={handleSelectFood}
            item={item}
            // id={item.id}
            // name={item.name}
            // subcategory={item.subcategory}
            // calories={item.measures.calories}
          />
        )}
      />
    </View>
  );
};

export default FoodList;

const styles = StyleSheet.create({
  modalContainer: {
    width: "80%",
    minHeight: 300,
    backgroundColor: "red",
  },
  qtyInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  amount: {
    marginLeft: 10,
    fontSize: 12,
    opacity: 0.75,
  },

  caloriesContainer: {
    minWidth: 50,
    backgroundColor: "#E6E6E6",
    padding: 5,
    borderRadius: 3,
    alignItems: "center",
  },

  textContainer: {
    flex: 1,
  },
  numItems: {
    fontWeight: "bold",
    fontSize: 16,
    // paddingVertical: 10,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  borderBottom: {
    // marginBottom: 15,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6E6",
  },
});
