import React, { Component } from 'react';
import Home from './pages/Home';
import Students from './pages/Students';
import GenerateReport from './pages/GenerateReport';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename = "/">
          <Route path="/" exact component={Home} />
          <Route path="/students" component={Students} />
          <Route path="/generate-report" component={GenerateReport} />
        </Router>
      </div>
    );
  }
}

export default App;
