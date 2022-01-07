import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KoreastockPage from './pages/KoreastockPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route path="/koreastock" component={KoreastockPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/join" component={JoinPage} />
    </BrowserRouter>
  ) ;
}

export default App;