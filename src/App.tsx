import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Nav from './Nav';
import Profile from './Profile';
import List from './List';
import Detail from './Detail';

function App(): JSX.Element {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/earthquakes/:id">
          <Detail />
        </Route>
        <Route path="/earthquakes">
          <List />
        </Route>
        <Route>
          <Redirect to="/earthquakes" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
