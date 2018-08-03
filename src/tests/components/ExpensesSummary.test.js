import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary component with expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary component without expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});
