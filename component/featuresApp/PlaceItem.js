import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const PlaceItem = ({ place, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={{ uri: place.imageUrl }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
