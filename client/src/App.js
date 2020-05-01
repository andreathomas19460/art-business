import React from 'react';
import logo from './logo.svg';
import Fhome from './components/Fhome';
import Fgallery from './components/Fgallery';
import Cart from './components/Cart';
import Shipping from './components/Shipping';
import Bhome from './components/Bhome';
import Bgallery from './components/Bgallery';
import LoginPage from './components/LoginPage';
import Transactions from './components/Transactions';


import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Fhome} />
      <Route exact path="/gallery" component={Fgallery} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/shipping" component={Shipping} />
      <Route exact path="/admin" component={Bhome} />
      <Route exact path="/admingallery" component={Bgallery} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/transactions" component={Transactions} />
    </Router>
  );
}

export default App;
