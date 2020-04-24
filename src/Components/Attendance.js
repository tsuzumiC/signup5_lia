import React, { useState } from "react";
import { Mutation } from "@apollo/react-components";
import { useHistory } from "react-router-dom";

import { SET_ATTENDANCE } from "../gql/mutators";
import { Radio, Field, Submit, Button } from "./Inputs";

const Attendance = (props) => {
    const {
        id: inviteId,
        host: { id: hostId, first_name, last_name },
        event_id,
        attendance,
    } = props.invite;
    const history = useHistory();
    const { values, setValues } = useState({
        attendance: attendance,
        comment: "",
    });
    const handleChange = (event) => {
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };
    return (
        <Mutation mutation={SET_ATTENDANCE}>
            {(setAttendance, { data }) => (
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        setAttendance({
                            variables: {
                                attendance: values.attendance,
                                invitation_id: inviteId,
                            },
                        });
                    }}
                >
                    <Radio
                        id="attending"
                        name="attendance"
                        value="attending"
                        lableText="Attending"
                        onChange={handleChange}
                    />
                    <Radio
                        id="not_attending"
                        name="attendance"
                        value="not_attending"
                        lableText="Can't Attend"
                        onChange={handleChange}
                    />
                    <Radio
                        id="maybe"
                        name="attendance"
                        value="maybe"
                        lableText="Maybe"
                        onChange={handleChange}
                    />
                    <Field
                        type="text"
                        id="comment"
                        value={values.comment}
                        onChange={handleChange}
                        lableText="Comments"
                    />
                    <Submit id="submit" value="Save" />
                    <Button
                        id="back"
                        value="Back"
                        onClick={() => history.push(`/events/${event_id}`)}
                    />
                </form>
            )}
        </Mutation>
    );
};
export default Attendance;

/* <div>
    <div>
        <div className="ui form">
            <div className="inline fields">
                <label htmlFor="attanded">
                    Are You Attanding This Event ?
                </label>
                <div className="field">
                    <div className="ui radio checkbox">
                        <input
                            type="radio"
                            name="attaded"
                            checked=""
                            tabIndex="0"
                            className="hidden"
                        />
                        <label>Attanded</label>
                    </div>
                </div>
                <div className="field">
                    <div className="ui radio checkbox">
                        <input
                            type="radio"
                            name="attanded"
                            tabIndex="0"
                            className="hidden"
                        />
                        <label>Maybe</label>
                    </div>
                </div>
                <div className="field">
                    <div className="ui radio checkbox">
                        <input
                            type="radio"
                            name="attanded"
                            tabIndex="0"
                            className="hidden"
                        />
                        <label>Not Attanded</label>
                    </div>
                </div>
            </div>
            <div className="ui form">
                <div className="field">
                    <label>Text</label>
                    <textarea></textarea>
                </div>
            </div>
            <hr />
            <div className="ui buttons">
                <button className="ui positive button">Save</button>
                <div className="or"></div>
                <button className="ui button">Cancel</button>
            </div>
        </div>
    </div>
</div> */
