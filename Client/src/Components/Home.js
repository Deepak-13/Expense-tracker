import React, { useContext, useEffect } from 'react'
import Header from './Header'
import Balance from './Balance'
import Incomeoutcome from './Incomeoutcome'
import { GlobalContext } from '../context/GlobalState'
import MenuBar from './MenuBar';
import TransactionList from './TransactionList'
import Graph from './Graph'
const Home = () => {
  const { getTransaction } = useContext(GlobalContext);
  useEffect(() => {
    getTransaction();
  },[])
  return (
    <div>
    <div className="container">
      <Header />
      <Balance />
      <Incomeoutcome />
      <Graph/>
      <MenuBar />
    </div>
      <div className='container_2'>
      <TransactionList/>
      </div>
     </div>
  )
}

export default Home
