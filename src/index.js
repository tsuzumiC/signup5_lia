import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";

// import { typeDefs, resolvers } from "./gql/resolvers";
import App from "./App";

const cache = new InMemoryCache({ addTypename: false });
const link = new HttpLink({
    //headers: { authorization: localStorage.getItem("id") },
    uri: "https://signup5lia.herokuapp.com/graphql/",
});
const client = new ApolloClient({
    cache,
    link,
    /* typeDefs,
    resolvers, */
});

cache.writeData({
    data: {
        storedEvent: null,
    },
});
ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <App />
        </Router>
    </ApolloProvider>,
    document.querySelector("#root")
);
