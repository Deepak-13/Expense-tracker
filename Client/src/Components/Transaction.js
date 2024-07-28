import React ,{useContext}from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({transaction}) => {
    const {deleteTransaction} =useContext(GlobalContext);
    
  return (
    <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
    {transaction.text} <span className='History'>{Math.abs(transaction.amount)}</span>
    <button onClick={()=>deleteTransaction(transaction._id)}className='delete-btn'>x</button>
    
  </li>
  )
}

export default Transaction
