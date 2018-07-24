import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashBoardPage = () => (
  <div>
    This is from my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my add expense component
  </div>
);

const routes = (
  // BrowserRouter expects the child to have a length of 1 so a div must be created
  // if there are to be multiple routes
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashBoardPage} />
      <Route path="/create" component={AddExpensePage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
