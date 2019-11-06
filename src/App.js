import React from 'react';
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Navbar/navbar'
import './App.css';

function App() {
  return (
    <div className="App">
    
     <Navbar/> 
     {/* <Router>
       clickable routes to navbar pages will go here
     </Router> */}
    </div>
  );
}

export default App;
