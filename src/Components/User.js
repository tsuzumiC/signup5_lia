import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const response = {
    ATTENDING: "Is attending.",
    NOT_ATTENDING: "Can't attend.",
    MAYBE: "Haven't decided yet.",
    NO_RESPONSE: "Not responded.",
};
const User = (props) => {
    const [state, setState] = useState({ commentVisibility: false });
    const { fname, lname, attendance, comment, inviteId } = props;
    const location = useLocation(),
        history = useHistory();

    return (
        <div>
            <div className="card">
                <div
                    className="card-header"
                    onClick={() => {
                        return comment
                            ? setState({
                                  commentVisibility: !state.commentVisibility,
                              })
                            : null;
                    }}
                >
                    <div className="d-flex justify-content-between">
                        <div>
                            {fname} {lname}
                        </div>
                        <i className="fas fa-check"></i>
                        <div>{response[attendance]}</div>
                        <i
                            onClick={(event) => {
                                event.stopPropagation();
                                history.push(
                                    `${location.pathname}/${inviteId}`
                                );
                            }}
                            className="fas fa-user-edit"
                            style={{ cursor: "pointer" }}
                        ></i>
                    </div>
                </div>
                <div>
                    {state.commentVisibility ? (
                        <div className="card-body">
                            <div className="card-text">{comment}</div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default User;
