import { gql } from "apollo-boost";

export const GET_ALL_PERSONS = gql`
    query getAllPersons {
        getAllPersons {
            id
            email
            first_name
            last_name
        }
    }
`;

export const GET_PERSON_BY_ID = gql`
    query getPersonById($id: Int!) {
        getPersonById(id: $id) {
            email
            first_name
            last_name
        }
    }
`;

export const GET_PERSON_BY_EMAIL = gql`
    query getPersonByEmail($email: String!) {
        getPersonByEmail(email: $email) {
            id
            first_name
            last_name
        }
    }
`;

export const TRY_LOGIN = gql`
    query getPersonByEmail($email: String!) {
        getPersonByEmail(email: $email) {
            id
        }
    }
`;

//Local cashe
export const LOGGED_IN_USER = gql`
    query loggedInUser {
        loggedInUser @client {
            id
            __typename
        }
    }
`;
