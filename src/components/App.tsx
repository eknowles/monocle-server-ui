import React from 'react';
import { Router } from '@reach/router';

import Route from './Route';
import RecordingsPage from '../pages/recordings';
import HomePage from '../pages/home';

const App = () => {
  return (
    <Router>
      <Route component={HomePage} path="/" />
      <Route component={RecordingsPage} path="/recordings" />
    </Router>
  );
}

export default App;
