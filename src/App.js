import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Clients from './components/Clients';
import Action from './components/Action';
import './navbar.css';
import Popup from './components/Popup';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {

  render() {
  
    return (
      <Router>
      <div className="App">
      <Navbar/>
        
        <Route exact path="/clients" render={() => <Clients />} />
        <Route exact path="/actions" render={()=> <Action />} />
        <Route exact path="/analytics" />
      </div>
    </Router>
        );
      }
    }
    
    export default App;
