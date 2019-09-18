import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename = "/">
        <Route path="/" exact component={Header} />
        <Route path="/students" component={Form} />
        <Route path="/generate-report" component={Header} />
    </Router>
    </div>
  );
}

export default App;
