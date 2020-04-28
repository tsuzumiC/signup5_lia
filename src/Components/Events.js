import React, { useState } from "react";
import {
    Switch,
    Redirect,
    Route,
    useLocation,
    useRouteMatch,
} from "react-router-dom";
import { useLazyQuery } from "@apollo/react-hooks";

import { GET_EVENT_BY_ID } from "../gql/queries";

import EventInfo from "./EventInfo";
import Invited from "./Invited";
import Attendance from "./Attendance";

export const Events = () => {
    let response = null,
        eventData = null;

    const location = useLocation(),
        address = location.pathname,
        match = useRouteMatch(),
        eventMatch = new RegExp("^/events/[0-9]+/*$"),
        inviteMatch = new RegExp("^/events/[0-9]+/[0-9]+/*$");

    const [values, setValues] = useState({
        eventId: "",
        storedEvent: null,
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
            if (
                !values.storedEvent ||
                values.storedEvent.id !== values.eventId
            ) {
                getEvent({ variables: { id: values.eventId } });
            }
        };

    if (loading) {
        response = <p>Loading...</p>;
    }

    if (error) {
        response = <p>No event with this ID.</p>;
    }

    if (data) {
        eventData = data.getEventById;
        if (!values.storedEvent || eventData.id !== values.storedEvent.id) {
            setValues((values) => ({
                ...values,
                storedEvent: eventData,
            }));
        }
    } else if (!values.storedEvent && !loading && !error) {
        if (eventMatch.test(address)) {
            getEvent({ variables: { id: address.match(/[0-9]+/)[0] } });
        } else if (inviteMatch.test(address)) {
            getEvent({ variables: { id: address.match(/[0-9]+/)[0] } });
        }
    }

    if (values.storedEvent) {
        if (!inviteMatch.test(address)) {
            response = (
                <Redirect to={`${match.path}/${values.storedEvent.id}`} />
            );
        }
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
                    {values.storedEvent ? (
                        <Event event={values.storedEvent} />
                    ) : null}
                </Route>
                <Route path={match.path}>
                    {loading ? null : <h3>Please enter an Event ID (1-10)</h3>}
                </Route>
            </Switch>
        </div>
    );
};

const Event = (props) => {
    const match = useRouteMatch(),
        location = useLocation().pathname,
        regEx = new RegExp("events/[0-9]+/[0-9]+");
    return (
        <>
            <EventInfo event={props.event} />
            <Switch>
                <Route path={`${match.path}/:inviteId`}>
                    {regEx.test(location) ? (
                        <Attendance
                            invite={props.event.invitations.find((invite) => {
                                return (
                                    invite.id ===
                                    location.slice(
                                        location.lastIndexOf("/") + 1
                                    )
                                );
                            })}
                        />
                    ) : (
                        <div>Loading</div>
                    )}
                </Route>
                <Route path={match.path}>
                    <Invited invited={props.event.invitations} />
                </Route>
            </Switch>
        </>
    );
};
