import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

const Income_history = ({ sort }) => {
    const { transactions } = useContext(GlobalContext);
   
    // Filter positive transactions (income)
    const pos_transactions = transactions.filter(transaction => transaction.amount > 0);
  


    // Sorting function based on sort parameter
    const sortTransactions = (transactions, sortType) => {
        switch (sortType) {
            case 'High':
                return transactions.slice().sort((a, b) => b.amount - a.amount);
            case 'Low':
                return transactions.slice().sort((a, b) => a.amount - b.amount);
            default:
                return transactions; // Default: return original order
        }
    };

    // Apply sorting to positive transactions based on sort prop
    const sortedTransactions = sortTransactions(pos_transactions, sort);

    return (
        <div id="income" >
            <ul id="list" className="list">
                {sortedTransactions.map(transaction => (
                    <Transaction key={transaction._id} transaction={transaction} />
                ))}
            </ul>
        </div>
    );
};

export default Income_history;
