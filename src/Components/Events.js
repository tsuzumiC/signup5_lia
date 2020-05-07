import React, { useState } from "react";
import {
    Switch,
    Redirect,
    Route,
    useHistory,
    useLocation,
    useRouteMatch,
} from "react-router-dom";
import { useLazyQuery, useApolloClient } from "@apollo/react-hooks";

import { GET_EVENT_BY_ID } from "../gql/queries";

import EventInfo from "./EventInfo";
import Invited from "./Invited";
import Attendance from "./Attendance";

export const Events = () => {
    let response = null,
        eventData = null;

    const history = useHistory(),
        location = useLocation(),
        address = location.pathname,
        match = useRouteMatch(),
        client = useApolloClient(),
        eventMatch = new RegExp(`^${match.url}/[0-9]+/*$`),
        inviteMatch = new RegExp(`^${match.url}/[0-9]+/[0-9]+/*$`),
        idMatch = new RegExp("/[0-9]+/*");

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
                history.push(match.path);
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
            client.writeData({ data: { storedEvent: eventData } });
        }
    } else if (!values.storedEvent && !loading && !error) {
        if (eventMatch.test(address)) {
            getEvent({
                variables: { id: address.match(idMatch)[0].replace(/\//g, "") },
            });
        } else if (inviteMatch.test(address)) {
            getEvent({
                variables: { id: address.match(idMatch)[0].replace(/\//g, "") },
            });
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
                    {loading ? null : <h3>Please enter an Event ID (1-3)</h3>}
                </Route>
            </Switch>
        </div>
    );
};

const Event = (props) => {
    const match = useRouteMatch(),
        location = useLocation(),
        address = location.pathname,
        regEx = new RegExp(`^${match.url}/[0-9]+/*$`),
        idMatch = new RegExp("/[0-9]+", "g");

    return (
        <>
            <EventInfo event={props.event} />
            <Switch>
                <Route path={`${match.path}/:inviteId`}>
                    {regEx.test(address) ? (
                        <Attendance
                            invite={props.event.invitations.find((invite) => {
                                return (
                                    invite.id ===
                                    address.match(idMatch)[1].replace(/\//g, "")
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
