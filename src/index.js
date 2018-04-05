import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home/Home";
import registerServiceWorker from "./registerServiceWorker";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import "semantic-ui-css/semantic.min.css";
const API =
  process.env.NODE_ENV === "production"
    ? "https://radiant-refuge-35147.herokuapp.com/graphql/"
    : "http://localhost:8000/graphql/";

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  link: new HttpLink({ uri: API }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
