import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
  const { id, description, amount, date } = itemData.item;
  return (
    <ExpenseItem
      id={id}
      description={description}
      amount={amount}
      date={date}
    />
  );
};

const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <Text onPress={() => console.log(expenses)}>Hello</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={renderExpenseItem}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
