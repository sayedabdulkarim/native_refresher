import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../../component/expenseApp/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../../store/context/expense_context";
import { getDateMinusDays } from "../../utils/date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((i) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return i.date > date7daysAgo;
  });

  return (
    <ExpensesOutput
      periodName={"Last 7 days"}
      expenses={recentExpenses}
      fallbackText={"No Data found."}
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
