import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";

const ImageCard = ({
  itemContainer,
  pressedStl,
  imageUrl,
  image,
  onPress,
  text,
  subtCatTitle,
  subcatTitleStl,
  textStl,
}) => {
  return (
    <View style={itemContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && pressedStl}
      >
        <ImageBackground style={image} source={{ uri: imageUrl }}>
          <Text style={textStl}>{text}</Text>
          {subtCatTitle && <Text style={subcatTitleStl}>{subtCatTitle}</Text>}
        </ImageBackground>
      </Pressable>
    </View>
  );
};

export default ImageCard;
