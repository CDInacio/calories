import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import SubcategoriesItem from "./SubcategoriesItem";

const SubcategoriesList = ({ data }) => {
  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => <SubcategoriesItem item={item} />}
        keyExtractor={(item) => item}
        horizontal={true}
      />
    </View>
  );
};

export default SubcategoriesList;

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: 12,
    marginTop: 10,
    marginBottom: 10,
  },
});
