import React from 'react';
import { connect } from 'react-redux';

export const ExpensesSummary = (props) => (
  <div>
    {console.log(props)}
    {/* {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense}/>
        })
      )
    } */}
  </div>
);

const mapStateToProps = (state) => ({ expenses: state.expenses });

export default connect(mapStateToProps)(ExpensesSummary);