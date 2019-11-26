import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Navbar/navbar';
import Search from './Search/search';
import './App.css';

function App() {
  return (
    <div className="App">
    
    <Router>
    <Navbar/> 
    <Route exact path="/search" render={() => {return <Search/>}}/>
    </Router> 
    </div>
  );
}

export default App;
