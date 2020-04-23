import React from "react";
import {
    Switch,
    Redirect,
    Route,
    useLocation,
    useRouteMatch,
} from "react-router-dom";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";

import { GET_EVENT_BY_ID } from "../quries";
import { useForm } from "../hooks";

import EventInfo from "../Components/EventInfo";
import Invited from "../Components/Invited";
import { eventDefault } from "../defaults";

export const Events = () => {
    let response = null,
        eventData = eventDefault,
        match = useRouteMatch();

    const location = useLocation(),
        address = location.pathname;

    const { values, handleSubmit, handleChange } = useForm(() => getEvent(), {
        eventId: "",
        submitedId: "",
    });

    const [getEvent, { loading, error, data }] = useLazyQuery(GET_EVENT_BY_ID, {
        variables: { id: values.submitedId },
    });

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
        response = <Redirect to={`${match.path}/${values.submitedId}`} />;
        eventData = data.getEventById;
    } else if (!address.endsWith("events")) {
        response = <Redirect to={match.path} />;
    }

    return (
        <div>
            <form
                onSubmit={(event) => {
                    handleSubmit(event, { submitedId: values.eventId });
                }}
            >
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
                    <h3>Please enter an Event ID (1-10)</h3>
                </Route>
            </Switch>
        </div>
    );
};

const Event = (props) => {
    return (
        <>
            <EventInfo event={props.event} />
            <Invited invited={props.event.invitations} />
        </>
    );
};
