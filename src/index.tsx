import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';
import Header from './components/header/header';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
  name: "movies",
  version: "0.1",
});

root.render(
  <React.StrictMode> 
    <ApolloProvider client={client}>
      <Header />
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
