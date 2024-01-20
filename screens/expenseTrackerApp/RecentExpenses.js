import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../../component/expenseApp/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../../store/context/expense_context";
import { getDateMinusDays, getFormattedDate } from "../../utils/date";
import { getStoreExpense } from "../../utils/https";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  //state
  const [fetchedExpenses, setFetchedExpenses] = useState([]);
  // const recentExpenses = expensesCtx.expenses.filter((i) => {
  const recentExpenses = fetchedExpenses.filter((expense) => {
    const today = new Date();
    const date7daysAgo = getDateMinusDays(today, 7);
    const expenseDate = new Date(expense.date);
    return expenseDate > date7daysAgo;
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
            date,
            description,
          };
          data.push(expenseObj);
        }
        setFetchedExpenses(data);
        // console.log({ data });
      })
      .catch((err) => console.log(err, " errr"));
  }, []);

  console.log(fetchedExpenses);
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
