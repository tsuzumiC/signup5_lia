import React from "react";

const GetDecision = (props) => {
    const { decision } = props;

    const response = {
        ATTENDING: () => {
            return (
                <div className="d-flex justify-content-between">
                    <i
                        style={{ marginTop: "5px" }}
                        className="fas fa-check"
                    ></i>{" "}
                    <p style={{ marginLeft: "60px" }}> Attending</p>
                </div>
            );
        },
        NOT_ATTENDING: () => {
            return (
                <div className="d-flex justify-content-between">
                    <i
                        style={{ marginTop: "5px" }}
                        className="fas fa-times-circle"
                    ></i>
                    <p style={{ marginLeft: "60px" }}>Not Attending </p>
                </div>
            );
        },
        MAYBE: () => {
            return (
                <div className="d-flex justify-content-between">
                    <i
                        style={{ marginTop: "5px" }}
                        className="fas fa-question-circle"
                    ></i>
                    <p style={{ marginLeft: "60px" }}>Maybe</p>
                </div>
            );
        },
        NO_RESPONSE: () => {
            return (
                <div className="d-flex justify-content-between">
                    <i style={{ marginTop: "5px" }} className="fas fa-sync"></i>
                    <p style={{ marginLeft: "60px" }}>Not respondend</p>
                </div>
            );
        },
    };

    /* if (decision === "Is attending.") {
        return (
            <div className="d-flex justify-content-between">
                <i style={{ marginTop: "5px" }} className="fas fa-check"></i>{" "}
                <p style={{ marginLeft: "60px" }}> Attending</p>
            </div>
        );
    } else if (decision === "Haven't decided yet.") {
        return (
            <div className="d-flex justify-content-between">
                <i
                    style={{ marginTop: "5px" }}
                    className="fas fa-question-circle"
                ></i>
                <p style={{ marginLeft: "60px" }}>Maybe</p>
            </div>
        );
    } else if (decision === "Can't attend.") {
        return (
            <div className="d-flex justify-content-between">
                <i
                    style={{ marginTop: "5px" }}
                    className="fas fa-times-circle"
                ></i>
                <p style={{ marginLeft: "60px" }}>Not Attending </p>
            </div>
        );
    } else {
        // default not responded

        return (
            <div className="d-flex justify-content-between">
                <i style={{ marginTop: "5px" }} className="fas fa-sync"></i>
                <p style={{ marginLeft: "60px" }}>Not respondend</p>
            </div>
        );
    } */

    return response[decision]();
};
export default GetDecision;
