import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'

import App from './App';
import reportWebVitals from './reportWebVitals';

import './assets/scss/base.scss'

const cache = new InMemoryCache()
const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql'
})
const client = new ApolloClient({
  cache,
  link: httpLink,
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
