import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@mui/material';
import theme from "./mui/theme"

import './styles/index.css';
import './styles/font.css';

import App from './App';


const client = new ApolloClient({
  uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cls621f810gn201w3gd57bl3o/master",
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>

);
