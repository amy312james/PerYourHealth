import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = ['Consultation Fee', 'Lab Test', 'Medication'];

  return (
    <ul>
      {expenses.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ExpenseList;
