import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import { ProvideAuth } from '../services/auth';
import AuthButton from './AuthButton';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <AuthButton />
        <Switch>
          <PrivateRoute path="/app">
            <HomePage />
          </PrivateRoute>
          <Route component={LoginPage} path="/login" />
        </Switch>
      </BrowserRouter>
    </ProvideAuth>
  );
};

export default App;
