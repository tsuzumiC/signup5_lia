import React, { useState } from "react";
import { Mutation } from "@apollo/react-components";
import { useHistory } from "react-router-dom";

import { CREATE_EVENT } from "../gql/mutators";

const EventCreator = () => {
    const [values, setValues] = useState({
            addGuestForm: false,

            title: "",
            location: "",
            date: "",
            startTime: "",
            endTime: "",
            description: "",
            guests: [],
            gName: "",
            gSurname: "",
            gEmail: "",
        }),
        {
            addGuestForm,
            title,
            location,
            date,
            startTime,
            endTime,
            description,
            guests,
            gName,
            gSurname,
            gEmail,
        } = values,
        history = useHistory();

    const handleChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    const handleCreateEvent = (createEvent, event) => {
        if (
            title !== "" &&
            location !== "" &&
            date !== "" &&
            startTime !== "" &&
            endTime !== "" &&
            description !== "" &&
            guests.length > 0
        ) {
            createEvent({
                variables: {
                    event: {
                        host: {
                            id: 1,
                        },
                        title: title,
                        description: description,
                        date_of_event: date,
                        start_time_of_event: startTime,
                        end_time_of_event: endTime,
                        location: location,
                        invitations: guests.map((guest) => {
                            return { guest: guest };
                        }),
                    },
                },
            });
        } else {
            alert("missing field pls fill everywhere");
        }
    };

    const addGuest = () => {
        if (gName !== "" && gSurname !== "" && gEmail !== "") {
            setValues((values) => ({
                ...values,
                addGuestForm: !addGuestForm,
                gEmail: "",
                gName: "",
                gSurname: "",
                guests: guests.concat({
                    first_name: gName,
                    last_name: gSurname,
                    email: gEmail,
                }),
            }));
        }

        console.log(guests);
    };

    const showAddedGuests = () => {
        return (
            <>
                {guests.length > 0 ? (
                    <div>
                        <div style={{ color: "grey" }}>
                            Name&emsp;&emsp;&emsp;&emsp;Surname&emsp;&emsp;&emsp;&emsp;Email{" "}
                            <br />
                        </div>
                        <ul className="list-group">
                            {guests.map((guest) => {
                                return (
                                    <li
                                        key={guest.id}
                                        className="list-group-item list-group-item-warning"
                                    >
                                        <div>
                                            <div
                                                style={{
                                                    color: "#000",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {guest.first_name}
                                                &emsp;&emsp;&emsp;&emsp;
                                                {guest.last_name}
                                                &emsp;&emsp;&emsp;&emsp;
                                                {guest.email}{" "}
                                                &emsp;&emsp;&emsp;&emsp;
                                                <i
                                                    onClick={() => {
                                                        setValues((values) => ({
                                                            ...values,
                                                            guests: guests.filter(
                                                                (item) => {
                                                                    return (
                                                                        item.id !==
                                                                        guest.id
                                                                    );
                                                                }
                                                            ),
                                                        }));
                                                    }}
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    className="fas fa-trash-alt"
                                                ></i>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : null}
            </>
        );
    };

    return (
        <div style={{ backgroundColor: "#ECD275" }} className="card">
            <div className="card-header">
                <div
                    style={{
                        fontSize: 24,
                        padding: "0 5px",
                    }}
                    className="d-inline ml-3"
                >
                    Create New Event
                </div>
            </div>
            <Mutation
                mutation={CREATE_EVENT}
                onCompleted={({ id }) => {
                    history.push(`/events/${id}`);
                }}
            >
                {(createEvent, { loading, error }) => (
                    <div className="card-body">
                        <div className="d-flex flex-column">
                            <div>
                                <label
                                    className="mr-2"
                                    style={{ fontWeight: "bold" }}
                                    htmlFor="title"
                                >
                                    Event Name :
                                </label>
                                <input
                                    value={title}
                                    onChange={handleChange}
                                    name="title"
                                    id="title"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label
                                    className="mr-4"
                                    style={{ fontWeight: "bold" }}
                                    htmlFor="location"
                                >
                                    Location :
                                </label>
                                <input
                                    value={location}
                                    onChange={handleChange}
                                    name="location"
                                    id="location"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label
                                    className="mr-5"
                                    style={{ fontWeight: "bold" }}
                                    htmlFor="date"
                                >
                                    Date:
                                </label>
                                <input
                                    value={date}
                                    onChange={handleChange}
                                    name="date"
                                    id="date"
                                    type="date"
                                />
                                <label
                                    className="ml-1"
                                    style={{ fontWeight: "bold" }}
                                    htmlFor="startTime"
                                >
                                    Start Time:
                                </label>
                                <input
                                    value={startTime}
                                    onChange={handleChange}
                                    name="startTime"
                                    id="startTime"
                                    type="time"
                                />
                                <label
                                    className="ml-1"
                                    style={{ fontWeight: "bold" }}
                                    htmlFor="endTime"
                                >
                                    End Time:
                                </label>
                                <input
                                    value={endTime}
                                    onChange={handleChange}
                                    name="endTime"
                                    id="endTime"
                                    type="time"
                                />
                            </div>
                        </div>
                        <div>
                            <p className="ml-3">Description : </p>
                            <textarea
                                value={description}
                                onChange={handleChange}
                                name="description"
                                id="description"
                                cols="50"
                                rows="10"
                            ></textarea>
                        </div>
                        <div>
                            {showAddedGuests()}
                            <button
                                onClick={() => {
                                    setValues((values) => ({
                                        ...values,
                                        addGuestForm: !addGuestForm,
                                    }));
                                }}
                                type="button"
                                className="btn btn-warning mt-2 mb-2"
                            >
                                {" "}
                                <i
                                    style={{ marginRight: "10px" }}
                                    className="fas fa-plus"
                                ></i>{" "}
                                Invitation
                            </button>
                            <div>
                                {addGuestForm ? (
                                    <form
                                        onSubmit={(event) => {
                                            event.preventDefault();
                                            addGuest();
                                        }}
                                        className="d-inline-flex flex-column border border-info mb-5"
                                    >
                                        <div>
                                            <label
                                                className="mr-2"
                                                style={{ fontWeight: "bold" }}
                                                htmlFor="gName"
                                            >
                                                {" "}
                                                Guest Name :
                                            </label>
                                            <input
                                                value={gName}
                                                onChange={handleChange}
                                                name="gName"
                                                id="gName"
                                                type="text"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                className="mr-4"
                                                style={{ fontWeight: "bold" }}
                                                htmlFor="gSurname"
                                            >
                                                Guest Surname :
                                            </label>
                                            <input
                                                value={gSurname}
                                                onChange={handleChange}
                                                name="gSurname"
                                                id="gSurname"
                                                type="text"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                className="mr-4"
                                                style={{ fontWeight: "bold" }}
                                                htmlFor="gEmail"
                                            >
                                                Guest Email :
                                            </label>
                                            <input
                                                value={gEmail}
                                                onChange={handleChange}
                                                name="gEmail"
                                                id="gEmail"
                                                type="email"
                                            />
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="btn btn-success mb-3"
                                            >
                                                Add Invitation
                                            </button>
                                        </div>
                                    </form>
                                ) : null}
                            </div>
                        </div>
                        <div className="d-inline-flex">
                            <button
                                onClick={() => {
                                    history.push("/");
                                }}
                                type="button"
                                className="btn btn-light mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={(event) => {
                                    handleCreateEvent(createEvent, event);
                                }}
                                type="button"
                                className="btn btn-primary"
                                disabled={loading}
                            >
                                Create
                            </button>
                            {error}
                        </div>
                    </div>
                )}
            </Mutation>
        </div>
    );
};

export default EventCreator;
