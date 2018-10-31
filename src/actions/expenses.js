import uuid from "uuid";
import databases from "../firebase/firebase";
export const addExpens = expense => ({
  type: "ADD_EXPENSE",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;

    const newExpense = {
      description,
      note,
      amount,
      createdAt
    };

    databases
      .ref("Expenses")
      .push(newExpense)
      .then(ref => {
        dispatch(
          addExpens({
            id: ref.key,
            ...newExpense
          })
        );
      });
  };
};

export const removeExpens = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const editExpense = (id, updtes) => ({
  type: "EDIT_EXPENSE",
  id,
  updtes
});
