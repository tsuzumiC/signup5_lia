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
            history.push(`/events/${values.inputValue}`);
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
        [lastErrorID, setlastErrorID] = useState(null),
        isInviteMatch = new RegExp(`${match.url}/*[0-9]+/*`),
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
    console.log(!!data, !!loading, !!error, lastErrorID);

    if (loading) {
        if (lastErrorID !== null) {
            setlastErrorID(null);
        }
        return <p>{`Loading event ${eventID}`}</p>;
    } else if (error && (eventID === lastErrorID || lastErrorID === null)) {
        if (lastErrorID === null) {
            setlastErrorID(eventID);
        }
        return (
            <pre>{`Error loading event ${eventID} with response:
    ${error}`}</pre>
        );
    } else if (data && data.getEventById.id === eventID) {
        event = data.getEventById;
        if (
            !cachedEvents.find((cachedEvent) => {
                return _.isEqual(cachedEvent, event);
            })
        ) {
            client.writeData({
                data: {
                    events:
                        cachedEvents.length > 0
                            ? cachedEvents.concat(event)
                            : [event],
                },
            });
        }
        if (lastErrorID !== null) {
            setlastErrorID(null);
        }
    } else if (
        !!cachedEvents.find((event) => {
            return event.id === eventID;
        })
    ) {
        event = cachedEvents.find((event) => {
            return event.id === eventID;
        });
        if (lastErrorID !== null) {
            setlastErrorID(null);
        }
    } else {
        getEvent({ variables: { id: eventID } });
    }

    if (isInviteMatch.test(address) && !!event) {
        invite = event.invitations.find((invite) => {
            return invite.id === inviteID;
        });
    }
    if (event === null) {
        return <p>{`Loading event ${eventID}`}</p>;
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
