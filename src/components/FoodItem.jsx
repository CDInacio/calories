import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const FoodItem = ({ item, onPress }) => {
  return (
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
        </View>
      </Pressable>
    </View>
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
  subcategory: {
    opacity: 0.5,
  },
  foodInfoContainer: {
    paddingLeft: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  foodContainer: {
    borderRadius: 3,
    overflow: "hidden",
    marginHorizontal: 15,

    borderBottomWidth: 1,
    borderBottomColor: "#ccc",

    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    // elevation: 3,

    // backgroundColor: "white",
  },
});
