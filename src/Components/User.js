import React, { Component } from "react";

// import Button from "react-bootstrap/Button";

const response = {
    ATTENDING: "Is attending.",
    NOT_ATTENDING: "Can't attend.",
    MAYBE: "Haven't decided yet.",
    NO_RESPONSE: "Not responded.",
};
class User extends Component {
    state = {
        commentVisibility: false,
    };
    changeVisibility = () => {
        const { comment } = this.props;
        if (comment !== "") {
            this.setState({
                commentVisibility: !this.state.commentVisibility,
            });
        }
    };
    // const handleClick = (event) => {};

    render() {
        const { fname, lname, attendance, comment } = this.props;
        const { commentVisibility } = this.state;
        return (
            <div>
                <div className="card">
                    <div
                        className="card-header"
                        onClick={this.changeVisibility}
                    >
                        <div className="d-flex justify-content-between">
                            <div>
                                {fname} {lname}
                            </div>
                            <i className="fas fa-check"></i>
                            <div>{response[attendance]}</div>
                            <i
                                // onClick={handleClick}
                                className="fas fa-user-edit"
                                style={{ cursor: "pointer" }}
                            ></i>
                        </div>
                    </div>
                    <div>
                        {commentVisibility ? (
                            <div className="card-body">
                                <div className="card-text">{comment}</div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
