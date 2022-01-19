// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Main from './components/APIdemo_ReactRouterV6';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )
}

export default App;