import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../../utils/categories";
import CategoriesItem from "./CategoriesItem";

const CategoriesList = () => {
  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoriesItem
            id={item.id}
            category={item.category}
            imageUrl={item.imageUrl}
          />
        )}
        keyExtractor={(item) => item.id}
        // numColumns={1}
      />
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
