import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import Topics from './components/Topics';
import Form from './components/Form';
import Topiccompiler from './components/Topiccompiler';


const App = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Topics} />
        <Route path="/first" component={Form} />
        {/* <Route path="/second" component={Jotain} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
