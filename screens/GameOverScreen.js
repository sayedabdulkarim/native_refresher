import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GameOverScreen = () => {
  return (
    <View>
      <Text>GameOverScreen</Text>
      <Text>GameOverScreen</Text>
      <Text>GameOverScreen</Text>
      <Text>GameOverScreen</Text>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
