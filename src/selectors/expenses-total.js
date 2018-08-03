const getExpensesTotal = (expenses) => {
    const expensesAmount = expenses.map((expense) => expense.amount);
    const expensesTotal = expensesAmount.reduce((a, b) => a + b, 0);
    return expensesTotal;
};


export default getExpensesTotal;
