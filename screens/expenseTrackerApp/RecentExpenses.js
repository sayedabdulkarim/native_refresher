import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../../component/expenseApp/ExpensesOutput";
import { useContext, useEffect } from "react";
import { ExpensesContext } from "../../store/context/expense_context";
import { getDateMinusDays, getFormattedDate } from "../../utils/date";
import { getStoreExpense } from "../../utils/https";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((i) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);

    return i.date > date7daysAgo;
  });

  useEffect(() => {
    const data = [];
    getStoreExpense()
      .then((res) => {
        for (let i in res.data) {
          const { amount, date, description } = res.data[i];
          const expenseObj = {
            id: i,
            amount,
            date: getFormattedDate(date),
            description,
          };
          data.push(expenseObj);
        }
        console.log({ data });
      })
      .catch((err) => console.log(err, " errr"));
  }, []);

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
