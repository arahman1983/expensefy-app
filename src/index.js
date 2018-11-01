import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configStore from "./store/configStore";
import "./css/bootstrap.min.css";
import "./App.css";
import App from "./App";
import { startsetExpenses } from "./actions/expenses";
import "./firebase/firebase";

const store = configStore();

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
ReactDOM.render(<p>Loading ...</p>, document.getElementById("root"));

store.dispatch(startsetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("root"));
});
