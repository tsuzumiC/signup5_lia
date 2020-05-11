import React, { Component } from "react";

// import Consumer from '../context'
var uniqid = require("uniqid");

export default class EventCreator extends Component {
    state = {
        showContent: false,
        addGuestForm: false,

        name: "",
        loc: "",
        date: "",
        start: "",
        end: "",
        des: "",
        gName: "",
        gSurname: "",
        gEmail: "",
        guests: [],
    };

    changeInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value,
        });
    };

    openContent = () => {
        this.setState({
            showContent: !this.state.showContent,
        });
    };

    returnMainPage = () => {
        // dispach parametresi gonnderiliyordu
        const { handlePage, pageStat } = this.props;
        handlePage(!pageStat);
        //  dispatch({type : "CHANGE_VISIBILITY_EC"})
    };

    createEvent = () => { // state ve event butun verileri backend e cekilebilir.
        // dispach parametresi gonnderiliyordu
        const { name, loc, date, start, end, des, guests } = this.state;

        if (
            name !== "" &&
            loc !== "" &&
            date !== "" &&
            start !== "" &&
            end !== "" &&
            des !== "" &&
            guests.length > 0
        ) {
            const eventInfo = {
                name,
                des,
                date,
                loc,
                startTime: start,
                endTime: end,
            };
            this.returnMainPage();
            // dispatch({ type: "ADD_EVENT", payload: eventInfo });
            // dispatch({ type: "CHANGE_VISIBILITY_EC" });
            // dispatch({ type: "ADD_GUEST", payload: guests });
        } else {
            alert("missing field pls fill everywhere");
        }
    };

    showAddGuestForm = () => {
        this.setState({
            addGuestForm: !this.state.addGuestForm,
        });
    };

    addGuest = () => {
        const { gEmail, gName, gSurname, guests } = this.state;

        if (gName !== "" && gSurname !== "" && gEmail !== "") {
            guests.push({
                id: uniqid(),
                name: gName,
                surname: gSurname,
                email: gEmail,
            });
        }
        this.setState({
            gEmail: "",
            gName: "",
            gSurname: "",
        });
        this.showAddGuestForm();

        console.log(guests);
    };

    showAddedGuests = () => {
        const { guests } = this.state;
        const title = "";

        return (
            <>
                <div style={{ color: "grey" }}>
                    Name&emsp;&emsp;&emsp;&emsp;Surname&emsp;&emsp;&emsp;&emsp;Email{" "}
                    <br />
                </div>
                {guests.length > 0 ? (
                    <div>
                        <ul className="list-group">
                            {guests.map((guest) => {
                                // tüm userları ekrana verdim
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
                                                {guest.name}
                                                &emsp;&emsp;&emsp;&emsp;
                                                {guest.surname}
                                                &emsp;&emsp;&emsp;&emsp;
                                                {guest.email}{" "}
                                                &emsp;&emsp;&emsp;&emsp;
                                                <i
                                                    onClick={this.deleteGuest.bind(
                                                        this,
                                                        guest.id
                                                    )}
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

    deleteGuest = (id) => {
        this.setState({
            guests: this.state.guests.filter((guest) => guest.id !== id),
        });
    };
    render() {
        const { showContent, addGuestForm } = this.state;
        const { name, loc, date, start, end, des } = this.state;
        const { gEmail, gName, gSurname } = this.state;

        return (
            <div style={{ backgroundColor: "#ECD275" }} className="card">
                <div onClick={this.openContent} className="card-header">
                    <div
                        style={{
                            fontSize: 24,
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "1px",
                            borderRadius: "4%",
                            backgroundColor: "#F4EDAB",
                        }}
                        className="d-inline ml-3"
                    >
                        Create Event
                    </div>
                </div>
                {showContent ? (
                    <div className="card-body">
                        <div className="d-flex flex-column">
                            <div>
                                <label
                                    className="mr-2"
                                    style={{ fontWeight: "bold" }}
                                    htmlFor="name"
                                >
                                    Event Name :
                                </label>
                                <input
                                    value={name}
                                    onChange={this.changeInput}
                                    name="name"
                                    id="name"
                                    type="text"
                                />
                            </div>

                            <div>
                                <label
                                    className="mr-4"
                                    style={{ fontWeight: "bold" }}
                                    htmlFor="loc"
                                >
                                    Location :
                                </label>
                                <input
                                    value={loc}
                                    onChange={this.changeInput}
                                    name="loc"
                                    id="loc"
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
                                    onChange={this.changeInput}
                                    name="date"
                                    id="date"
                                    type="date"
                                />

                                <label
                                    className="ml-1"
                                    style={{ fontWeight: "bold" }}
                                    htmlFor="start"
                                >
                                    Start Time:
                                </label>
                                <input
                                    value={start}
                                    onChange={this.changeInput}
                                    name="start"
                                    id="start"
                                    type="time"
                                />

                                <label
                                    className="ml-1"
                                    style={{ fontWeight: "bold" }}
                                    htmlFor="end"
                                >
                                    End Time:
                                </label>
                                <input
                                    value={end}
                                    onChange={this.changeInput}
                                    name="end"
                                    id="end"
                                    type="time"
                                />
                            </div>
                        </div>
                        <div>
                            <p className="ml-3">Description : </p>
                            <textarea
                                value={des}
                                onChange={this.changeInput}
                                name="des"
                                id="des"
                                cols="50"
                                rows="10"
                            ></textarea>
                        </div>

                        <div>
                            {this.showAddedGuests()}

                            <button
                                onClick={this.showAddGuestForm}
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
                                    <div className="d-inline-flex flex-column border border-info mb-5">
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
                                                onChange={this.changeInput}
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
                                                onChange={this.changeInput}
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
                                                onChange={this.changeInput}
                                                name="gEmail"
                                                id="gEmail"
                                                type="text"
                                            />
                                        </div>

                                        <div>
                                            <button
                                                onClick={this.addGuest}
                                                type="button"
                                                className="btn btn-success mb-3"
                                            >
                                                Add Invitation
                                            </button>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div className="d-inline-flex">
                            <button
                                onClick={this.returnMainPage}
                                type="button"
                                className="btn btn-light mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={this.createEvent} // burdan cekebilir verileri
                                type="button"
                                className="btn btn-primary"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}
