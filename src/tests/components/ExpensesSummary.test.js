import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary component with single expense', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary component with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});
