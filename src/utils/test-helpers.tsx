import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { createStore } from '../store';

export const renderRoot = (Component: JSX.Element) => {
  return render(
    <Provider store={createStore()}>
      <Router history={createMemoryHistory()}>
        <Switch>
          <Route path="/">{Component}</Route>
        </Switch>
      </Router>
    </Provider>
  );
};
