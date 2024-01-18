import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../../component/expenseApp/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpensesOutput periodName={"Last 7 days"} />;
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
