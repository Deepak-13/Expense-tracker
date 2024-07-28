import React, { useContext } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { GlobalContext } from '../context/GlobalState';

const Graph = () => {
  const { transactions } = useContext(GlobalContext);
  const Income = transactions.filter(transaction => transaction.amount > 0);
  const Expense=transactions.filter(transaction => transaction.amount < 0);

  return (
    <div className='graph-container'>
       <Line className='line-chart'
        data={{
          labels: Income.map(data => new Date(data.createdat).toLocaleDateString()),
          datasets: [
            {
              label: 'Income',
              data: Income.map(data => Math.abs(data.amount)),
              borderColor: 'rgba(0, 255, 0)',
              backgroundColor: 'rgba(0, 255, 0)',
            },
          ],
        }}
        options={{
          responsive: true,
          elements: {
            line: {
              tension: 0,
            }
          },
          plugins: {
            legend: {
              position: 'top',
              display:false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false, 
              },
              ticks: {
                maxTicksLimit: 20,
              },
            },
            y: {
              grid: {
                display: false, 
              },
              ticks: {
                maxTicksLimit: 10, 
              },
            },
          },
        }}
      />
      <Line className='line-chart'
        data={{
          labels: Expense.map(data => new Date(data.createdat).toLocaleDateString()),
          datasets: [
            {
              label: 'Expense',
              data: Expense.map(data => Math.abs(data.amount)),
              borderColor: 'rgba(255, 0, 0)',
              backgroundColor: 'rgba(255, 0, 0)',
            },
          ],
        }}
        options={{
          responsive: true,
          elements: {
            line: {
              tension: 0,
            }
          },
          plugins: {
            legend: {
              position: 'top',
              display:false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false, 
              },
              ticks: {
                maxTicksLimit: 20,
              },
            },
            y: {
              grid: {
                display: false, 
              },
              ticks: {
                maxTicksLimit: 10, 
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Graph;
