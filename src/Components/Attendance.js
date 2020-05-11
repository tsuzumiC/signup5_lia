import React, { useState } from "react";
import { Mutation } from "@apollo/react-components";
import { useHistory, useRouteMatch } from "react-router-dom";

import { GET_CACHED_EVENTS } from "../gql/queries";
import { UPDATE_INVITATION } from "../gql/mutators";
import { Radio, Field, Submit, Button } from "./Inputs";

const Attendance = (props) => {
    const history = useHistory(),
        match = useRouteMatch();
    const {
        id: inviteId,
        guest: { id: guestId, first_name, last_name },
        event: { id: eventId },
        attendance,
        comment,
    } = props.invite;
    const [values, setValues] = useState({
        attendance: attendance,
        comment: comment,
    });
    const handleChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <Mutation
            mutation={UPDATE_INVITATION}
            update={(cache, { data: { updateInvitation } }) => {
                console.log(updateInvitation);
                const { events: cachedEvents } = cache.readQuery({
                    query: GET_CACHED_EVENTS,
                });
                let thisEvent = cachedEvents.find((event) => {
                        return event.id === eventId;
                    }),
                    thisInvite = thisEvent.invitations.find((invite) => {
                        return invite.id === inviteId;
                    });
                thisInvite.attendance = values.attendance;
                thisInvite.comment = values.comment;
                thisEvent.invitations = thisEvent.invitations.concat(
                    thisInvite
                );
                cache.writeData({
                    data: { events: cachedEvents.concat(thisEvent) },
                });
            }}
        >
            {(updateInvitation, { loading, error }) => (
                <div className="container mt-5">
                    <div className="card bg-warning ">
                        <div
                            style={{ color: "black" }}
                            className="card-header "
                        >
                            <div className="d-flex  justify-content-center">
                                <form
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                        updateInvitation({
                                            variables: {
                                                invitationUpdateInput: {
                                                    id: inviteId,
                                                    comment: values.comment,
                                                    attendance:
                                                        values.attendance,
                                                },
                                            },
                                        });
                                    }}
                                >
                                    <div className="d-flex flex-column text-center">
                                        {`${first_name} ${last_name}`}
                                        <div className="card-title mt-5">
                                            Are you attending this event ?
                                        </div>
                                        <div className="d-flex  justify-content-around">
                                            <div className="d-flex  flex-column">
                                                <Radio
                                                    id="attending"
                                                    name="attendance"
                                                    value="ATTENDING"
                                                    labelText="Attending"
                                                    onChange={handleChange}
                                                    compare={values.attendance}
                                                />
                                            </div>
                                            <div className="d-flex  flex-column">
                                                <Radio
                                                    id="not_attending"
                                                    name="attendance"
                                                    value="NOT_ATTENDING"
                                                    labelText="Can't Attend"
                                                    onChange={handleChange}
                                                    compare={values.attendance}
                                                />
                                            </div>
                                            <div className="d-flex  flex-column">
                                                <Radio
                                                    id="maybe"
                                                    name="attendance"
                                                    value="MAYBE"
                                                    labelText="Maybe"
                                                    onChange={handleChange}
                                                    compare={values.attendance}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Field
                                            type="text"
                                            id="comment"
                                            value={
                                                values.comment
                                                    ? values.comment
                                                    : ""
                                            }
                                            onChange={handleChange}
                                            labelText="Comments"
                                        />
                                        <Submit id="submit" value="Save" />
                                        <Button
                                            id="back"
                                            value="Back"
                                            onClick={() => {
                                                history.push(
                                                    `/events/${eventId}`
                                                );
                                            }}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Mutation>
    );
};
export default Attendance;
