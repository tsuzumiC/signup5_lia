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
        location = useLocation(),
        address = location.pathname,
        history = useHistory(),
        isEventMatch = new RegExp(`${match.url}/[0-9]+/*`),
        idMatch = new RegExp("/[0-9]+/*", "g");
    const [values, setValues] = useState({
        inputValue: isEventMatch.test(address)
            ? address.match(idMatch)[0].replace(/\//g, "")
            : "",
    });

    const handleChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };
    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    history.push(`/events/${values.inputValue}`);
                }}
            >
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
        isInviteMatch = new RegExp(`${match.url}/*[0-9]+/*`),
        isEventMatch = new RegExp(`${match.url}`),
        idMatch = new RegExp("/[0-9]+/*", "g"),
        eventID = address.match(idMatch)[0].replace(/\//g, ""),
        inviteID = address.replace(isEventMatch, "").replace(/\//g, "");
    const [lastErrorID, setLastErrorID] = useState(null);
    const {
        data: { events: cachedEvents },
    } = useQuery(GET_CACHED_EVENTS);
    const [getEvent, { data, loading, error }] = useLazyQuery(GET_EVENT_BY_ID);

    let event = null,
        invite = null;

    if (loading) {
        if (lastErrorID !== null) {
            setLastErrorID(null);
        }
        return <p>{`Loading event ${eventID}`}</p>;
    } else if (data && data.getEventById.id === eventID) {
        if (lastErrorID !== null) {
            setLastErrorID(null);
        }
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
    } else if (
        !!cachedEvents.find((event) => {
            return event.id === eventID;
        })
    ) {
        if (lastErrorID !== null) {
            setLastErrorID(null);
        }
        event = cachedEvents.find((event) => {
            return event.id === eventID;
        });
    } else if (error && (eventID === lastErrorID || lastErrorID === null)) {
        if (lastErrorID === null) {
            setLastErrorID(eventID);
        }
        return (
            <pre>{`Error loading event ${eventID} with response:
    ${error}`}</pre>
        );
    } else {
        if (lastErrorID !== null) {
            setLastErrorID(null);
        }
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
