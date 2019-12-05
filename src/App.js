import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import Topics from './components/Topics';
import Form from './components/Form';
import Topiccompiler from './components/Topiccompiler';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <div className='MainContent'>
          <Switch>
            <Route exact path="/" component={Topics} />
            <Route path="/form" component={Form} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
