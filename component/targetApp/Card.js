import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    // flex: 1,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    //android only for boxShadow ( elevation )
    elevation: 8,
  },
});
