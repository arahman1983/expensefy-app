import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configStore from "./store/configStore";
import { addExpens } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import "./css/bootstrap.min.css";
import "./App.css";
import App from "./App";

const store = configStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
});

store.dispatch(
  addExpens({ description: "Water Bill", amount: 500, createdAt: 10000 })
);
store.dispatch(
  addExpens({ description: "Gas Bill", amount: 200, createdAt: 15000 })
);
store.dispatch(
  addExpens({ description: "Rent", amount: 2000, createdAt: 30000 })
);

/*
store.dispatch(setTextFilter("bill"));

setTimeout(() => {
  store.dispatch(setTextFilter("water"));
}, 5000);*/

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));
