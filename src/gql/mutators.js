import { gql } from "apollo-boost";

export const UPDATE_INVITATION = gql`
    mutation updateInvitation($invitation: UpdateInvitationInput) {
        updateInvitation(invitation: $invitation) {
            id
            message
        }
    }
`;

export const CREATE_EVENT = gql`
    mutation createEvent($event: CreateEventInput) {
        createEvent(event: $event) {
            id
            message
        }
    }
`;
//local cache
export const STORE_EVENT = gql`
    mutation StoreEvent($event: Event) {
        storeEvent(event: $event) @client
    }
`;
