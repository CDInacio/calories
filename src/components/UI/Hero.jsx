import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "./Icon";

const Hero = ({ imageUrl, onPress, title, subtitle }) => {
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate("Search");
  };

  return (
    <ImageBackground style={styles.image} source={{ uri: imageUrl }}>
      <View style={styles.iconsContainer}>
        <View style={styles.btnContainer}>
          <Pressable onPress={onPress}>
            <Icon
              style={styles.icon}
              name="chevron-back"
              size={40}
              color="#ffff"
            />
          </Pressable>
        </View>
        <View style={[styles.btnContainer, styles.searchContainer]}>
          <Pressable onPress={handleSearch}>
            <Icon style={[styles.icon]} name="search" size={30} color="#ffff" />
          </Pressable>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </ImageBackground>
  );
};

export default Hero;

const styles = StyleSheet.create({
  opened: {},
  searchBar: {
    borderRadius: 5,
    backgroundColor: "white",
    width: 220,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  searchContainer: {
    flexDirection: "row",
  },
  iconsContainer: {
    marginHorizontal: 10,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    marginHorizontal: 20,
    marginTop: 90,
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    marginHorizontal: 20,
    color: "white",
    opacity: 0.75,
  },
  icon: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});
