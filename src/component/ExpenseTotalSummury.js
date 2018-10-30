import React from "react";
import { connect } from "react-redux";
import selectExpenseTotal from "../selectors/SelectExpenseTotal";
import getVisibleExpenses from "../selectors/expenses";

const ExpenseTotalSummury = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  return (
    <div>
      <h5>
        There are {expenseCount} {expenseWord} with Total {expensesTotal}
      </h5>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    exprnsesTotal: selectExpenseTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseTotalSummury);
