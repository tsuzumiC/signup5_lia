import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import User from "./User";

const Invitation = (props) => {
    const invitationList = props.invited.map((invited) => {
        return (
            <ListGroup.Item>
                <User
                    fname={invited.guest.first_name}
                    lname={invited.guest.last_name}
                    attendance={invited.attendance}
                    comment="WIP"
                />
            </ListGroup.Item>
        );
    });
    return (
        <div>
            <ListGroup>{invitationList}</ListGroup>
        </div>
    );
};

export default Invitation;
