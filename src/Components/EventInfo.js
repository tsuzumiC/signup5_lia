import React from "react";

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

    return (
        <div className="card text-center">
            <div style={{ fontWeight: "bold" }} className="card-header ">
                {" "}
                Event by {name}
            </div>
            <div className="card-body">
                <div className="card-title">{title}</div>
                <div className="card-text">{description}</div>
                <div className="card-text">Location: {location}</div>
                <div className="card-text">
                    Date: {date} <br /> Time: {time}
                </div>
            </div>
        </div>
    );
};

export default EventInfo;
