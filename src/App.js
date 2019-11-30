import React, { Component } from 'react';
import Home from './pages/Home';
import Students from './pages/Students';
import GenerateReport from './pages/GenerateReport';
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import db from "db";

const { app, Menu } = window.require("electron").remote;

const menu = Menu.buildFromTemplate([
  {
    label: "File",
    submenu: [
      {
        label: "Exit",
        click() {
          app.quit();
        }
      }
    ]
  },
  {
    label: "Help",
    submenu: [
      {
        label: "Students",
        click() {
          window.location = "file:///index.html#/";
        }
      },
      {
        label: "Generate Report",
        click() {
          window.location = "file:///index.html#/";
        }
      }
    ]
  }
]);
Menu.setApplicationMenu(menu);

class App extends Component {
  componentWillUnmount() {
    db.close();
  }

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
