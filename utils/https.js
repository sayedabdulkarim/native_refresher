import axios from "axios";
const BACKEND_URL = `https://react-native-course-67b6f-default-rtdb.firebaseio.com`;

const storeExpense = (expenseData) => {
  axios
    .post(`${BACKEND_URL}/expenses.json`, expenseData)
    .then((res) => console.log(res, " resss"))
    .catch((err) => console.log(err, " errror "));
};

const getStoreExpense = () => axios.get(`${BACKEND_URL}//expenses.json`);

export { storeExpense, getStoreExpense };
