import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';


const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://graphql-server.loc/graphql' }),
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
