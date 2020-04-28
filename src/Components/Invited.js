import React from "react";

import User from "./User";

const Invited = (props) => {
    const invitationList = props.invited.map((invite) => {
        return (
            <li
                key={invite.id}
                className="list-group-item list-group-item-warning"
            >
                <User
                    fname={invite.guest.first_name}
                    lname={invite.guest.last_name}
                    attendance={invite.attendance}
                    comment={invite.comment}
                    inviteId={invite.id}
                />
            </li>
        );
    });
    return <ul className="list-group">{invitationList}</ul>;
};

export default Invited;
