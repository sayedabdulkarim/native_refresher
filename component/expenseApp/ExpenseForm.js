import { FlatList, StyleSheet, Text, View } from "react-native";
import Input from "./Input";

const ExpenseForm = ({}) => {
  const amountChangeHandler = () => {};
  return (
    <View style={styles.container}>
      <Input
        label={"Amount"}
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label={"Date"}
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label={"Description"}
        textInputConfig={{
          multiline: true,
          onChangeText: () => {},
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingHorizontal: 24,
    // paddingBottom: 0,
    // backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
