import React, { useState } from "react";
import { Mutation } from "@apollo/react-components";
import { useHistory } from "react-router-dom";

import { UPDATE_INVITATION } from "../gql/mutators";
import { Radio, Field, Submit, Button } from "./Inputs";

const Attendance = (props) => {
    const {
        id: inviteId,
        guest: { id: guestId, first_name, last_name },
        event: { id: eventId },
        attendance,
        comment,
    } = props.invite;
    const history = useHistory();
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
        <Mutation mutation={UPDATE_INVITATION}>
            {(updateInvitation, { data }) => (
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
                        value={values.comment}
                        onChange={handleChange}
                        labelText="Comments"
                    />
                    <Submit id="submit" value="Save" />
                    <Button
                        id="back"
                        value="Back"
                        onClick={() => history.push(`/events/${eventId}`)}
                    />
                </form>
            )}
        </Mutation>
    );
};
export default Attendance;
