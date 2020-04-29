import React, { useState } from "react";
import { Mutation } from "@apollo/react-components";
import { useHistory, useRouteMatch } from "react-router-dom";

import { GET_STORED_EVENT } from "../gql/queries";
import { UPDATE_INVITATION } from "../gql/mutators";
import { Radio, Field, Submit, Button } from "./Inputs";
import { logDOM } from "@testing-library/react";

const Attendance = (props) => {
    const {
        id: inviteId,
        guest: { id: guestId, first_name, last_name },
        event: { id: eventId },
        attendance,
        comment,
    } = props.invite;
    const history = useHistory(),
        match = useRouteMatch();
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
            // update={(cache, { data: { updateInvitation } }) => {
            //     const { storedEvent } = cache.readQuery({
            //         query: GET_STORED_EVENT,
            //     });
            //     storedEvent.invitations[1].id

            //     ]}
            //     let tempEvent = {...storedEvent};
            //     tempEvent.invitations[storedEvent.invitations.findIndex((invite)=> {return invite.id === inviteId})]
            //     //  {...storedEvent, ...{invitations:{id: inviteId, attendance:values.attendance, comment: values.comment}}};
            //     cache.writeData({data:{storedEvent}});
            // }}
        >
            {(updateInvitation, { loading, error }) => (
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        updateInvitation({
                            variables: {
                                invitationUpdateInput: {
                                    id: inviteId,
                                    comment: values.comment,
                                    attendance: values.attendance,
                                },
                            },
                        });
                    }}
                >
                    <Radio
                        id="attending"
                        name="attendance"
                        value="ATTENDING"
                        labelText="Attending"
                        onChange={handleChange}
                        compare={values.attendance}
                    />
                    <Radio
                        id="not_attending"
                        name="attendance"
                        value="NOT_ATTENDING"
                        labelText="Can't Attend"
                        onChange={handleChange}
                        compare={values.attendance}
                    />
                    <Radio
                        id="maybe"
                        name="attendance"
                        value="MAYBE"
                        labelText="Maybe"
                        onChange={handleChange}
                        compare={values.attendance}
                    />
                    <Field
                        type="text"
                        id="comment"
                        value={values.comment ? values.comment : ""}
                        onChange={handleChange}
                        labelText="Comments"
                    />
                    <Submit id="submit" value="Save" />
                    <Button
                        id="back"
                        value="Back"
                        onClick={() => {
                            let url = match.url;
                            if (url.endsWith("/")) {
                                url = url.slice(url.length - 1);
                            }
                            history.push(url.slice(0, url.lastIndexOf("/")));
                        }}
                    />
                </form>
            )}
        </Mutation>
    );
};
export default Attendance;
