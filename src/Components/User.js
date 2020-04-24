import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
const response = {
    ATTENDING: "Is attending.",
    NOT_ATTENDING: "Can't attend.",
    MAYBE: "Haven't decided yet.",
    NO_RESPONSE: "Not responded.",
};
const User = (props) => {
    const { fname, lname, attendance, comment } = props;
    return (
        <div>
            <Card>
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <div>
                            {fname} {lname}
                        </div>
                        <i className="fas fa-check"></i>
                        <div>{response[attendance]}</div>
                        <i
                            className="fas fa-user-edit"
                            style={{ cursor: "pointer" }}
                        ></i>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{comment}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default User;
