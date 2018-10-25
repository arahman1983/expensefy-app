import React from "react";
import ConnectedExpenseList from "./expenseList";
import ExpenseListFilters from "./expenseListFilters";

const ExpinseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ConnectedExpenseList />
  </div>
);
export default ExpinseDashboardPage;
