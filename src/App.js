import React, { Fragment } from 'react';
// import '.App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Fragment>
      <Router>
          <Navbar/>
          
        <Switch>
          <Route path='/' exact/>
        </Switch>
      </Router>

    </Fragment>
      
    
  );
}

export default App;
