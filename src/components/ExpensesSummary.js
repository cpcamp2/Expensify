import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';

  return (
    <div>
      <h4>
        Viewing {props.expenses.length} {expenseWord} totaling {numeral((getExpensesTotal(props.expenses)) / 100).format('$0,0.00')}
      </h4>
    </div>
  );
};


const mapStateToProps = (state) => ({ expenses: state.expenses });

export default connect(mapStateToProps)(ExpensesSummary);
