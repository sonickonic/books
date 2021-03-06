import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { store } from './store';
import { GlobalStyles } from './styles/global-styles';
import { Footer } from './components/footer/footer-component';
import { Books } from './features/books/books-component';

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <GlobalStyles />
            <Books />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
