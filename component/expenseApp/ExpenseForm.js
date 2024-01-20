import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "./Button";
import { GlobalStyles } from "../../constants/styles";

const ExpenseForm = ({ onCancel, onSubmit, isEditing, selectedExpense }) => {
  //state
  const [inputs, setInputs] = useState({
    amount: {
      value: selectedExpense ? selectedExpense?.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: selectedExpense
        ? selectedExpense?.date.toISOString().slice(0, 10)
        : "",
      isValid: true,
    },
    description: {
      value: selectedExpense ? selectedExpense?.description : "",
      isValid: true,
    },
  });
  //func
  const inputChangeHandler = (name, enteredValue) => {
    setInputs(() => {
      return {
        ...inputs,
        [name]: { value: enteredValue, isValid: true },
      };
    });
  };

  const submitHandler = () => {
    const { amount, date, description } = inputs;
    const payload = {
      amount: +amount.value,
      date: new Date(date.value),
      description: description.value,
    };

    const amountIsValid = !isNaN(amount.value) && amount > 0;
    const dateIsValid = date.value.toString() !== "Invalid Date";
    const descriptionIsValid = description.value.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      //show
      // Alert.alert("Invalid input, Please check your input values.");
      setInputs((prev) => {
        return {
          amount: { value: prev.amount.value, isValid: amountIsValid },
          date: { value: prev.date.value, isValid: dateIsValid },
          description: {
            value: prev.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(payload);
  };

  const formIsInValid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;
  //
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label={"Amount"}
          invalid={!inputs.amount.value}
          textInputConfig={{
            keyboardType: "decimal-pad",
            // onChangeText: inputChangeHandler.bind(this, "amount"),
            onChangeText: (enteredValue) =>
              inputChangeHandler("amount", enteredValue),
            value: inputs.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label={"Date"}
          invalid={!inputs.date.value}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (enteredValue) =>
              inputChangeHandler("date", enteredValue),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label={"Description"}
        invalid={!inputs.description.value}
        textInputConfig={{
          multiline: true,
          onChangeText: (enteredValue) =>
            inputChangeHandler("description", enteredValue),
          value: inputs.description.value,
        }}
      />

      {formIsInValid && (
        <Text style={styles.errorText}>Please check input values.</Text>
      )}

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
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});
