import { gql } from "apollo-boost";

export const SET_ATTENDANCE = gql`
    mutation setAttendance($attendance: Attendance, $invitation_id: Int) {
        setAttendance(attendance: $attendance, invitation_id: $invitation_id) {
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
