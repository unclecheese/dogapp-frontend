import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink, concat } from 'apollo-link';

const httpLink = new HttpLink({ uri: 'http://192.168.33.4/graphql' });
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  let token = localStorage.getItem('jwt');
  if (token) {
    operation.setContext({
      headers: {
        Authorization: 'Bearer ' + token,
      } 
    });
  }
  return forward(operation);
})

const client = new ApolloClient({
  link:concat(authMiddleware, httpLink),
  cache: new InMemoryCache({
    dataIdFromObject: (o) => {
      if (o.ID >= 0 && o.__typename) {
        return `${o.__typename}:${o.ID}`;
      }
      return null;
    },
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
