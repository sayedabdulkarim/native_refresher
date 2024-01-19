import { createContext, useReducer, useState } from "react";

const dummy = [
  {
    id: "e1",
    description: "Shoes",
    amount: 100,
    date: new Date("2024-01-15"),
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
  {
    id: "e9",
    description: "T-Shirt",
    amount: 500,
    date: new Date("2024-01-12"),
  },
  {
    id: "e10",
    description: "Cap",
    amount: 250,
    date: new Date("2024-01-13"),
  },
  {
    id: "e11",
    description: "Gloves",
    amount: 300,
    date: new Date("2024-01-14"),
  },
  {
    id: "e12",
    description: "Jacket",
    amount: 1200,
    date: new Date("2024-01-15"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpenses: ({ description, amount, date }) => {},
  deleteExpenses: ({ id }) => {},
  updateExpenses: (id, { description, amount, date }) => {},
});

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = Math.random().toString();
      return [{ ...action.payload, id }, ...state];

    case "UPDATE":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });

    case "DELETE":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

function ExpensesContextProvider({ children }) {
  //state
  const [expenseState, dispatch] = useReducer(expenseReducer, dummy);

  //fucn
  const addExpenses = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const deleteExpenses = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateExpenses = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id, expenseData } });
  };

  //
  const value = {
    expenses: expenseState,
    addExpenses,
    deleteExpenses,
    updateExpenses,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
