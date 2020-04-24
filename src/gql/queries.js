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

export const GET_EVENT_BY_ID = gql`
    query getEventById($id: Int!) {
        getEventById(id: $id) {
            id
            title
            host {
                id
                first_name
                last_name
            }
            description
            date_of_event
            time_of_event
            location
            invitations {
                id
                guest {
                    id
                    first_name
                    last_name
                }
                event_id
                attendance
            }
        }
    }
`;

//Local cashe
export const LOGGED_IN_USER = gql`
    query loggedInUser {
        loggedInUser @client {
            id
        }
    }
`;

export const GET_STORED_EVENT = gql`
    query getStoredEvent {
        storedEvent @client {
            id
            title
            host {
                id
                first_name
                last_name
            }
            description
            date_of_event
            time_of_event
            location
            invitations {
                id
                guest {
                    id
                    first_name
                    last_name
                }
                event_id
                attendance
            }
        }
    }
`;
