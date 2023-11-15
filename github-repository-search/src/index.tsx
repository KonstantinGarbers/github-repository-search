import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App";
import {
  createHttpLink,
  ApolloLink,
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});
const authLink = new ApolloLink((operation, forward) => {
  // TODO: add bearer token support
  operation.setContext({
    headers: {
      Authorization: `Bearer`,
    },
  });
  return forward(operation);
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
const router = createBrowserRouter([
  {
    path: "/:login",
    element: <App />,
  },
  {
    path : "*",
    element: <Navigate to="/KonstantinGarbers" />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
