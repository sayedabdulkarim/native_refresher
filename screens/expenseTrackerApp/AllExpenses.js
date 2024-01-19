import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../../component/expenseApp/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../../store/context/expense_context";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <>
      <ExpensesOutput
        periodName={"Total"}
        expenses={expensesCtx.expenses}
        fallbackText={"No Data found."}
      />
    </>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
