import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FoodItem from "../components/FoodItem";
import Icon from "../components/UI/Icon";
import { FOODS } from "../utils/dataset";

const SearchScreen = ({ navigation }) => {
  const [searchString, setSearchString] = useState("");
  const [searchResult, setSearchResult] = useState();

  // const handleSelectFood = (foodId) => {
  //   navigation.navigate("SingleFood", { id: foodId });
  // };

  const handleGoBack = () => {
    navigation.goBack("Search");
  };

  const handleSearchString = (enteredValue) => {
    setSearchString(enteredValue);
  };

  const handleSubmit = () => {
    if (searchString.length === 0) {
      setSearchResult([]);
      return;
    }

    const searchedFood = FOODS.filter((food) =>
      food.name.toLowerCase().includes(searchString.toLowerCase())
    );

    setSearchResult(searchedFood);
  };

  const RenderItem = ({ item }) => {
    const handleSelectFood = (foodId) => {
      navigation.navigate("SingleFood", { id: foodId });
    };

    return <FoodItem onPress={handleSelectFood} item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Pressable onPress={handleGoBack}>
          <Icon
            style={styles.icon}
            name="chevron-back"
            size={45}
            color="#ccc"
          />
        </Pressable>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={handleSearchString}
            onSubmitEditing={handleSubmit}
            style={styles.input}
            placeholder="Pesquise por um alimento"
          />
        </View>
      </View>
      {searchResult?.length == 0 ? (
        <View style={styles.noResultsCont}>
          <Text style={styles.noResults}>
            Não houve resultados para a busca
          </Text>
        </View>
      ) : (
        <FlatList
          data={searchResult}
          renderItem={RenderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
  },
  input: {
    paddingLeft: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  inputContainer: {
    marginRight: 10,
    flex: 1,
  },
  noResultsCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noResults: {
    fontWeight: "bold",
  },
  innerContainer: {
    marginHorizontal: 7,
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
