import { FlatList, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";

const ExpenseForm = ({ onCancel, onSubmit, isEditing, selectedExpense }) => {
  //state
  const [inputValues, setInputValues] = useState({
    amount: selectedExpense ? selectedExpense?.amount.toString() : "",
    date: selectedExpense
      ? selectedExpense?.date.toISOString().slice(0, 10)
      : "",
    description: selectedExpense ? selectedExpense?.description : "",
  });
  //func
  const inputChangeHandler = (name, enteredValue) => {
    setInputValues(() => {
      return {
        ...inputValues,
        [name]: enteredValue,
      };
    });
  };

  const submitHandler = () => {
    const { amount, date, description } = inputValues;
    const payload = {
      amount: +amount,
      date: new Date(date),
      description,
    };
    onSubmit(payload);
  };
  //
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            // onChangeText: inputChangeHandler.bind(this, "amount"),
            onChangeText: (enteredValue) =>
              inputChangeHandler("amount", enteredValue),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label={"Date"}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (enteredValue) =>
              inputChangeHandler("date", enteredValue),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label={"Description"}
        textInputConfig={{
          multiline: true,
          onChangeText: (enteredValue) =>
            inputChangeHandler("description", enteredValue),
          value: inputValues.description,
        }}
      />

      <View style={styles.buttons}>
        <Button mode={"flat"} onPress={() => onCancel()} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={() => submitHandler()} style={styles.button}>
          {isEditing ? "EDIT " : "ADD"}
        </Button>
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
