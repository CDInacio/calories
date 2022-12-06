import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const FoodItem = ({ item, onPress }) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.foodContainer}>
        <Pressable
          onPress={() => onPress(item.id)}
          style={({ pressed }) => pressed && styles.pressed}
        >
          <View style={styles.foodInfoContainer}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.subcategory}>{item.subcategory}</Text>
            </View>
            <View style={styles.caloriesContainer}>
              <Text style={styles.calories}>
                {item.measures.calories?.toFixed(2)}
              </Text>
              <Text style={styles.kcal}>kcal</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  pressed: {
    backgroundColor: "#cccc",
  },
  name: {
    maxWidth: 250,
  },
  calories: {
    fontWeight: "bold",
    alignItems: "center",
    // backgroundColor: "red",
    // justifyContent: "center",
  },
  kcal: {
    fontWeight: "bold",
  },
  subcategory: {
    opacity: 0.5,
  },
  foodInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  foodContainer: {
    borderRadius: 3,
    overflow: "hidden",
    marginHorizontal: 15,
    marginBottom: 10,
    // elevation: 3,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    backgroundColor: "white",
  },
});
