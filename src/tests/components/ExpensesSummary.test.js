import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary component', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});
