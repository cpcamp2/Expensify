import React from 'react';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
  <div>
    <p>
      Viewing {props.expenses.length} expenses
      totaling {numeral((getExpensesTotal(props.expenses)) / 100).format('$0,0.00')}
    </p>
  </div>
);

const mapStateToProps = (state) => ({ expenses: state.expenses });

export default connect(mapStateToProps)(ExpensesSummary);
