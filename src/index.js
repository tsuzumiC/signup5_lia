import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";

import { resolvers, typeDefs } from "./gql/resolvers";
import App from "./components/App";

const cache = new InMemoryCache(),
    link = new HttpLink({
        uri: "https://signup5liadev.herokuapp.com/graphql/",
    }),
    client = new ApolloClient({ cache, link, resolvers, typeDefs });

cache.writeData({
    data: {
        events: [],
    },
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router basename={process.env.PUBLIC_URL}>
            <App />
        </Router>
    </ApolloProvider>,
    document.querySelector("#root")
);
