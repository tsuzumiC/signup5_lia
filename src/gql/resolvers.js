import { gql } from "apollo-boost";

export const typeDefs = gql`
    extend type Mutation {
        storeEvent(event: Event!): Event!
    }
`;

export const resolvers = {
    Mutation: {
        storeEvent: (_, variables, { cache }) => {
            cache.writeData({ storedEvent: variables.event });
        },
    },
};
