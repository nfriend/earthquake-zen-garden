import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Profile from './Profile';
import List from './List';

function App(): JSX.Element {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route>
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
