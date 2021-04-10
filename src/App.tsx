import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';

function App(): JSX.Element {
  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
