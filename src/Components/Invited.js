import React from "react";

import User from "./User";

const Invitation = (props) => {
    const invitationList = props.invited.map((invited) => {
        return (
            <ul className="list-group">
                <li
                    key={invited.id}
                    className="list-group-item list-group-item-warning"
                >
                    <User
                        fname={invited.guest.first_name}
                        lname={invited.guest.last_name}
                        attendance={invited.attendance}
                        comment="WIP"
                    />
                </li>
            </ul>
        );
    });
    return <div className="list-group">{invitationList}</div>;
};

export default Invitation;
