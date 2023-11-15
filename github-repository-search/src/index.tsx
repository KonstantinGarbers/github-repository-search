import React from "react";
import ReactDOM from "react-dom/client";
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
      Authorization: `Bearer `,
    },
  });
  return forward(operation);
});
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
