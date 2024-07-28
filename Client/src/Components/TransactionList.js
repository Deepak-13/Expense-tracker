import React, { useState } from 'react';
import Income_history from './Income_history';
import Outcome_history from './Outcome_history';

const TransactionList = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [sort, setSort] = useState('recent');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const renderComponent = () => {
    switch (selectedOption) {
      case 'option1':
        return (
          <ul className="parent-li">
            <Income_history sort={sort} />
            <Outcome_history sort={sort} />
          </ul>
        );
      case 'option2':
        return (
          <ul className="income-history">
            <Income_history sort={sort} />
          </ul>
        );
      case 'option3':
        return (
          <ul className="outcome-history">
            <Outcome_history sort={sort} />
          </ul>
        );
      default:
        return <div>Please select an option</div>;
    }
  };

  return (
    <div >
      <h3 className='his'>Transaction History</h3>
      <div className='Filter'>
        <select id="transactionDropdown" value={selectedOption} onChange={handleOptionChange}>
          <option value="option1">Both</option>
          <option value="option2">INCOME</option>
          <option value="option3">EXPENSE</option>
        </select>
        <select id="sortDropdown" value={sort} onChange={handleSortChange}>
          <option value="recent">Recent</option>
          <option value="High">High</option>
          <option value="Low">Low</option>
        </select>
      </div>
        {renderComponent()}
    </div>
  );
};

export default TransactionList;
