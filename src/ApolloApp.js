import React from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink, concat } from 'apollo-link';
import { connect } from 'react-redux';
import App from './App';

const httpLink = new HttpLink({ uri: 'http://graphql-server.loc/graphql' });
const createAuthMiddleware = (token) => new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  if (token) {
    operation.setContext({
      headers: {
        Authorization: 'Bearer ' + token,
      }
    });
  }
  return forward(operation);
})

const createClient = (token) => new ApolloClient({
  link: concat(createAuthMiddleware(token), httpLink),
  cache: new InMemoryCache({
    dataIdFromObject: (o) => {
      if (o.ID >= 0 && o.__typename) {
        return `${o.__typename}:${o.ID}`;
      }
      return null;
    },
  }),
});
const client = createClient(localStorage.getItem('jwt'));
const ApolloApp = ({ token }) => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default connect(
  (state) => ({
    token: state.token
  })
)(ApolloApp);
