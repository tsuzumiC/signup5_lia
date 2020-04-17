import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

import { resolvers, typeDefs } from "./resolvers";

import App from "./Components/App";
import { GET_PERSON_BY_ID, LOGGED_IN_USER } from "./quries";

const cache = new InMemoryCache({ addTypename: false });
const link = new HttpLink({
    headers: { authorization: localStorage.getItem("id") },
    uri: "https://signup5.herokuapp.com/graphql/",
});
const client = new ApolloClient({
    cache,
    link,
    typeDefs,
    resolvers,
});

cache.writeData({
    data: {
        loggedInUser:
            !!localStorage.getItem("id") > 0
                ? { id: localStorage.getItem("id"), __typename: "User" }
                : { id: 0, __typename: "User" },
    },
});
const LoadUser = () => {
    const { data } = useQuery(LOGGED_IN_USER);
    return <>{`ID: ${data.id}`}</>;
};
ReactDOM.render(
    <ApolloProvider client={client}>
        <LoadUser />
        <App />
    </ApolloProvider>,
    document.querySelector("#root")
);
