import axios from "axios";

const storeExpense = (expenseData) => {
  axios
    .post(
      "https://react-native-course-67b6f-default-rtdb.firebaseio.com/expenses.json",
      expenseData
    )
    .then((res) => console.log(res, " resss"))
    .catch((err) => console.log(err, " errror "));
};

const getStoreExpense = (expenseData) => {
  axios
    .get(
      "https://react-native-course-67b6f-default-rtdb.firebaseio.com/expenses.json"
    )
    .then((res) => console.log(res, " resss"))
    .catch((err) => console.log(err, " errror "));
};

export { storeExpense, getStoreExpense };
