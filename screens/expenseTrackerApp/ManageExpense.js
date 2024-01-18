import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const ManageExpense = ({ route, navigation }) => {
  const expenseId = route?.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);
  return (
    <View>
      <Text
        onPress={() =>
          console.log({ expenseId, isEditing, route: route.params })
        }
      >
        ManageExpense
      </Text>
      <Text>ManageExpense</Text>
      <Text>ManageExpense</Text>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
