import React from "react";
import Card from "react-bootstrap/Card";

const EventInfo = (props) => {
    const {
        id,
        host: { first_name: fname, last_name: lname },
        name = `${fname} ${lname}`,
        title,
        location,
        time_of_event: time,
        date_of_event: date,
        description,
    } = props.event;
    const returnField = id ? (
        <Card border="light" style={{ width: "18rem" }}>
            <Card.Header> Event by {name}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Location: {location}</Card.Text>
                <Card.Text>
                    Date: {date} <br /> Time: {time}
                </Card.Text>
            </Card.Body>
        </Card>
    ) : (
        <p>Please search for an event.</p>
    );
    return <>{returnField}</>;
};

export default EventInfo;
