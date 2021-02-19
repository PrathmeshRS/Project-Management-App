import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';
import Task from './components/Workspace';
import Working from './components/Working';

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__sidebar">
          <Sidebar />

        </div>
        <div className="app__workspace">
          <Switch>
            <Route path="/project/:projectId/task/:taskId">
              <Task />
            </Route>
            <Route exact path="/" >
              <Workspace />
            </Route>
            <Route>
              <Working />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
