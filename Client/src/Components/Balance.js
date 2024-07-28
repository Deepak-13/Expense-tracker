import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);


    // Map over the transactions to extract amounts
    const amounts = transactions.map(transaction => transaction.amount);
   
    // Calculate the total
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    

    return (
        <div>
            <h4>Balance</h4>
            <h1 id="balance" className={total < 0 ? 'minus' : 'plus'}>
                {total}
            </h1>
        </div>
    );
};

export default Balance;
