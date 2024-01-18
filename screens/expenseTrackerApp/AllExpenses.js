import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../../component/expenseApp/ExpensesOutput";

const AllExpenses = () => {
  return <ExpensesOutput periodName={"Total"} />;
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
