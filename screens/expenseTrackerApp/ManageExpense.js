import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../../component/expenseApp/IconButton";
import { GlobalStyles } from "../../constants/styles";
import Button from "../../component/expenseApp/Button";

const ManageExpense = ({ route, navigation }) => {
  //misc
  const expenseId = route?.params?.expenseId;
  const isEditing = !!expenseId;
  //func
  const handleDeleteExpense = () => {
    navigation.goBack();
  };
  const handleCancel = () => {
    navigation.goBack();
  };
  const handleConfirm = () => {
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
      <View style={styles.buttons}>
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
      </View>
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