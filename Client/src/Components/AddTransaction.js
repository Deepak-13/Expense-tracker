import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = ({ closeModal }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const onsubmit = e => {
    e.preventDefault();
    const amountValue = Number(amount);
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: selectedOption === 'option1' ? amountValue : -amountValue
    };

    setAmount('');
    setText('');
    addTransaction(newTransaction);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h3>ADD Transaction</h3>
        <select id="dropdown" value={selectedOption} onChange={handleChange}>
          <option value="option1">INCOME</option>
          <option value="option2">EXPENSE</option>
        </select>
        <form onSubmit={onsubmit}>
          <div className='form-control'>
            <label htmlFor='text'>Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' />
          </div>
          <div className='form-control'>
            <label htmlFor='amount'>Amount</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />
          </div>
          <button className='btn'>ADD</button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
