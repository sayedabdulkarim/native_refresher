import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import IconButton from "../../component/expenseApp/IconButton";
import { GlobalStyles } from "../../constants/styles";
import Button from "../../component/expenseApp/Button";
import { ExpensesContext } from "../../store/context/expense_context";

const ManageExpense = ({ route, navigation }) => {
  //misc
  const expensesCtx = useContext(ExpensesContext);
  const expenseId = route?.params?.expenseId;
  const isEditing = !!expenseId;
  //func
  const handleDeleteExpense = () => {
    expensesCtx.deleteExpenses(expenseId);
    navigation.goBack();
  };
  const handleCancel = () => {
    navigation.goBack();
  };
  const handleConfirm = () => {
    isEditing
      ? expensesCtx.updateExpenses(expenseId, {
          description: "TEST UPDATED",
          amount: 13,
          date: new Date(),
        })
      : expensesCtx.addExpenses({
          description: "TEST",
          amount: 13,
          date: new Date(),
        });
    navigation.goBack();
  };
  //asyn
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);
  return (
    <View style={styles.container}>
      {/*  */}
      <TextInput />
      {/*  */}
      <View style={styles.buttons}>
        <Button
          mode={"flat"}
          onPress={() => handleCancel()}
          style={styles.button}
        >
          Cancel
        </Button>
        <Button onPress={() => handleConfirm()} style={styles.button}>
          {isEditing ? "EDIT " : "ADD"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={"trash"}
            color={GlobalStyles.colors.error500}
            size={35}
            onPress={() => handleDeleteExpense()}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
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
