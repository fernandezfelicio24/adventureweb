import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Subscribe from './pages/Subscribe';


function App() {
  return (
    <Fragment>
      <Router>
          <Navbar/>
          
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services'  component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={Subscribe} />
        </Switch>
      </Router>

    </Fragment>
      
    
  );
}

export default App;
