import React, { useState } from "react";
import {
    Route,
    Switch,
    useRouteMatch,
    useLocation,
    useHistory,
} from "react-router-dom";
import { useLazyQuery, useQuery, useApolloClient } from "@apollo/react-hooks";
import { GET_EVENT_BY_ID, GET_CACHED_EVENTS } from "../gql/queries";
import _ from "lodash";

import EventInfo from "./EventInfo";
import Invited from "./Invited";
import Attendance from "./Attendance";

const Events = () => {
    const match = useRouteMatch(),
        history = useHistory();

    const [values, setValues] = useState({
        inputValue: "",
    });

    const handleChange = (event) => {
            event.persist();
            setValues((values) => ({
                ...values,
                [event.target.name]: event.target.value,
            }));
        },
        handleSubmit = (event) => {
            event.preventDefault();
            history.push(`${match.url}/${values.inputValue}`);
        };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={values.inputValue}
                    onChange={handleChange}
                    name="inputValue"
                />
                <input type="submit" value="Search" />
            </form>
            <Switch>
                <Route path={`${match.path}/:eventId`}>
                    <Event />
                </Route>
                <Route path={match.path}>Search for an Event</Route>
            </Switch>
        </div>
    );
};

const Event = () => {
    const match = useRouteMatch(),
        location = useLocation(),
        address = location.pathname,
        client = useApolloClient(),
        isInviteMatch = new RegExp(`${match.url}/[0-9]+/*`),
        isEventMatch = new RegExp(`${match.url}`),
        idMatch = new RegExp("/[0-9]+/*", "g");
    let event = null,
        invite = null;

    const eventID = address.match(idMatch)[0].replace(/\//g, ""),
        inviteID = address.replace(isEventMatch, "").replace(/\//g, "");

    const {
        data: { events: cachedEvents },
    } = useQuery(GET_CACHED_EVENTS);

    const [getEvent, { data, loading, error }] = useLazyQuery(GET_EVENT_BY_ID);

    if (loading) {
        return <p>{`Loading event ${eventID}`}</p>;
    }
    if (error) {
        return (
            <pre>{`Error loading event ${eventID} with response:
    ${error}`}</pre>
        );
    }
    if (data) {
        if (data.getEventById.id === eventID) {
            event = data.getEventById;
            if (
                !cachedEvents.find((cachedEvent) => {
                    return _.isEqual(cachedEvent, event);
                })
            ) {
                client.writeData({
                    data: {
                        events: cachedEvents.concat(event),
                    },
                });
            }
        } else {
            getEvent({ variables: { id: eventID } });
        }
    } else if (cachedEvents.length > 0 && !loading) {
        event = cachedEvents.find((event) => {
            return event.id === eventID;
        });
        if (event === undefined) {
            event = null;
            getEvent({ variables: { id: eventID } });
        }
    } else if (!loading) {
        getEvent({ variables: { id: eventID } });
    }

    if (event === null) {
        return <p>{`Loading event ${eventID}`}</p>;
    }

    if (isInviteMatch.test(address)) {
        invite = event.invitations.find((invite) => {
            return invite.id === inviteID;
        });
    }

    return (
        <>
            <EventInfo event={event} />
            <Switch>
                <Route path={`${match.path}/:inviteId`}>
                    {!!invite ? (
                        <Attendance invite={invite} />
                    ) : (
                        <p>Invalid invite ID</p>
                    )}
                </Route>
                <Route path={match.path}>
                    <Invited invited={event.invitations} />
                </Route>
            </Switch>
        </>
    );
};

export default Events;
