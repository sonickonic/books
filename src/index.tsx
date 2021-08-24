import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app';
import { ErrorBoundary } from './components/error-boundary/error-boundary-component';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
