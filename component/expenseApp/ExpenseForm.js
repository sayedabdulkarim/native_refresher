import { FlatList, StyleSheet, Text, View } from "react-native";

const ExpenseForm = ({ expenses = [], periodName, fallbackText }) => {
  return <View style={styles.container}></View>;
};

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
