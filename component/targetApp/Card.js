import { Dimensions, StyleSheet, Text, View } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

export default Card;

const { height, width: deviceWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  cardContainer: {
    // flex: 1,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18 : 36,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    //android only for boxShadow ( elevation )
    elevation: 8,
  },
});
