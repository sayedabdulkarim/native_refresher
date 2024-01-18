import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const dummy = [
  {
    id: "e1",
    description: "Shoes",
    amount: 100,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "Short",
    amount: 200,
    date: new Date("2021-12-19"),
  },
  {
    id: "e3",
    description: "Shirt",
    amount: 1100,
    date: new Date("2021-10-29"),
  },
  {
    id: "e4",
    description: "Jeans",
    amount: 2100,
    date: new Date("2021-12-19"),
  },
  {
    id: "e5",
    description: "Jeans",
    amount: 2100,
    date: new Date("2021-12-19"),
  },
  {
    id: "e6",
    description: "Jeans",
    amount: 2100,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "Jeans",
    amount: 2100,
    date: new Date("2021-12-19"),
  },
  {
    id: "e8",
    description: "Jeans",
    amount: 2100,
    date: new Date("2021-12-19"),
  },
];

const ExpensesOutput = ({ expenses = dummy, periodName }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
