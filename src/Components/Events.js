import React, { useState } from "react";
import {
    Switch,
    Redirect,
    Route,
    useLocation,
    useRouteMatch,
} from "react-router-dom";
import { useLazyQuery, useApolloClient, useQuery } from "@apollo/react-hooks";

import { GET_EVENT_BY_ID, GET_STORED_EVENT } from "../gql/queries";

import EventInfo from "./EventInfo";
import Invited from "./Invited";
import Attendance from "./Attendance";
import { eventDefault } from "../defaults";

export const Events = () => {
    let response = null,
        eventData = eventDefault;

    const location = useLocation(),
        address = location.pathname,
        match = useRouteMatch(),
        client = useApolloClient();

    const [values, setValues] = useState({
        eventId: "",
        storedEvent: useQuery(GET_STORED_EVENT).data.storedEvent,
    });
    const [getEvent, { loading, error, data }] = useLazyQuery(GET_EVENT_BY_ID);

    const handleChange = (event) => {
            event.persist();
            setValues((values) => ({
                ...values,
                [event.target.name]: event.target.value,
            }));
        },
        handleSubmit = (event) => {
            event.preventDefault();
            if (!values.storedEvent) {
                getEvent({ variables: { id: values.eventId } });
            } else if (values.storedEvent.id !== values.eventId) {
                getEvent({ variables: { id: values.eventId } });
            }
        };

    if (loading) {
        response =
            location.pathname === match.path ? (
                <p>Loading...</p>
            ) : (
                <Redirect to={match.path} />
            );
    }

    if (error) {
        response = <p>No event with this ID.</p>;
    }

    if (data) {
        eventData = data.getEventById;
        if (!values.storedEvent) {
            setValues((values) => ({ ...values, storedEvent: eventData }));
            client.writeData({ data: { storedEvent: eventData } });
        } else if (eventData.id !== values.storedEvent.id) {
            setValues((values) => ({ ...values, storedEvent: eventData }));
            client.writeData({ data: { storedEvent: eventData } });
        }
    } else if (!address.endsWith("events")) {
        let tempAddress = "";
        if (address.endsWith("/")) {
            tempAddress = address.slice(0, address.lastIndexOf("/"));
            tempAddress = tempAddress.slice(tempAddress.lastIndexOf("/") + 1);
        } else {
            tempAddress = address.slice(address.lastIndexOf("/") + 1);
        }
        getEvent({ variables: { id: tempAddress } });
        response = <Redirect to={match.path} />;
    }

    if (values.storedEvent !== null) {
        response = <Redirect to={`${match.path}/${values.storedEvent.id}`} />;
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={values.eventId}
                    onChange={handleChange}
                    name="eventId"
                    min="1"
                    max="10"
                />
                <input type="submit" value="Search" />
            </form>
            <div>{response}</div>
            <Switch>
                <Route path={`${match.path}/:eventId`}>
                    <Event event={eventData} />
                </Route>
                <Route path={match.path}>
                    {<h3>Please enter an Event ID (1-10)</h3>}
                </Route>
            </Switch>
        </div>
    );
};

const Event = (props) => {
    const match = useRouteMatch();
    return (
        <>
            <EventInfo event={props.event} />
            <Switch>
                <Route path={match.path}>
                    <Invited invited={props.event.invitations} />
                </Route>
                <Route path={`${match.path}/:inviteId`}>
                    <Attendance
                        invite={props.event.invitations.find((invite) => {
                            return (
                                invite.id ===
                                match.path.slice(
                                    match.path.lastIndexOf("/") + 1
                                )
                            );
                        })}
                    />
                </Route>
            </Switch>
        </>
    );
};
