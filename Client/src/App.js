import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import './App.css';
import Home from './Components/Home';




function App() {
  
  return (

    <GlobalProvider>
      <Home/>
    </GlobalProvider>
  );
}

export default App;
