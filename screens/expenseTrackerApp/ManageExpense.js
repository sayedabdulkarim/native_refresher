import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import IconButton from "../../component/expenseApp/IconButton";
import { GlobalStyles } from "../../constants/styles";
import Button from "../../component/expenseApp/Button";
import { ExpensesContext } from "../../store/context/expense_context";
import ExpenseForm from "../../component/expenseApp/ExpenseForm";
import { storeExpense } from "../../utils/https";

const ManageExpense = ({ route, navigation }) => {
  //misc
  const expensesCtx = useContext(ExpensesContext);
  const expenseId = route?.params?.expenseId;
  const isEditing = !!expenseId;
  const selectedExpense = expensesCtx.expenses.find((i) => i.id === expenseId);
  //func
  const handleDeleteExpense = () => {
    expensesCtx.deleteExpenses(expenseId);
    navigation.goBack();
  };
  const handleCancel = () => {
    navigation.goBack();
  };
  const handleConfirm = (data) => {
    isEditing
      ? expensesCtx.updateExpenses(expenseId, data)
      : (expensesCtx.addExpenses(data), storeExpense(data));
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
      <ExpenseForm
        expensesCtx={expensesCtx}
        onCancel={handleCancel}
        onSubmit={handleConfirm}
        isEditing={isEditing}
        selectedExpense={selectedExpense}
      />
      {/*  */}
      {/* <View style={styles.buttons}>
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
      </View> */}
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
