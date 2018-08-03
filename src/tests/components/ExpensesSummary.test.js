import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary component with single expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={2500}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary component with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={52} expensesTotal={2500000000}/>);
  expect(wrapper).toMatchSnapshot();
});
