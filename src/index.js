import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './state/store';
import { Provider as Redux } from 'react-redux';
import ApolloApp from './ApolloApp';


ReactDOM.render(
  <Redux store={store}>
    <ApolloApp />
  </Redux>,
  document.getElementById('root')
);
registerServiceWorker();
