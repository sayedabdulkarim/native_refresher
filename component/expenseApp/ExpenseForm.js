import { FlatList, StyleSheet, Text, View } from "react-native";
import Input from "./Input";

const ExpenseForm = ({}) => {
  const amountChangeHandler = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangeHandler,
          }}
        />
        <Input
          style={styles.rowInput}
          label={"Date"}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
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
    marginBottom: 20,
    marginTop: 40,
    // flex: 1,
    // paddingHorizontal: 24,
    // paddingBottom: 0,
    // backgroundColor: GlobalStyles.colors.primary700,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
