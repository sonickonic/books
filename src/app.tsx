import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </Provider>
  );
};
