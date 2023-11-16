import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import App from './App'
import {
  createHttpLink,
  ApolloLink,
  ApolloProvider,
  ApolloClient,
  InMemoryCache
} from '@apollo/client'
import { BEARER_TOKEN } from './credentials'

/**
 * Creates an HTTP link for Apollo client with GitHub's GraphQL API as URI.
 * @type {ApolloLink}
 */
const httpLink: ApolloLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
})

/**
 * Creates an HTTP link for Apollo client with GitHub's GraphQL API as URI.
 * @type {ApolloLink}
 */
const authLink: ApolloLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: 'Bearer ' + BEARER_TOKEN
    }
  })
  return forward(operation)
})
/**
 * Creates an Apollo client with the auth link and HTTP link concatenated,
 * and an in-memory cache.
 * @type {ApolloClient}
 */
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
/**
 * Creates a browser router with two routes:
 * - One for the user's login
 * - A fallback route that navigates to a default user's login
 * @type {BrowserRouter}
 */
const router = createBrowserRouter([
  {
    path: '/:login',
    element: <App />
  },
  {
    path: '*',
    element: <Navigate to="/KonstantinGarbers" />
  }
])

/**
 * Creates a root from a DOM container where the React elements will be rendered.
 * @type {Root}
 */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
)
