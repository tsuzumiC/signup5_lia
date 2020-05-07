import { gql } from "apollo-boost";

export const UPDATE_INVITATION = gql`
    mutation updateInvitation($invitationUpdateInput: InvitationUpdateInput) {
        updateInvitation(invitationUpdateInput: $invitationUpdateInput) {
            id
            message
        }
    }
`;

export const STORE_EVENT = gql`
    mutation StoreEvent($event: Event) {
        storeEvent(event: $event) @client
    }
`;
