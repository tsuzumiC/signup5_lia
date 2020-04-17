import "./Style/LoginBoxComponent.css";

import React, { Component } from "react";
import { useApolloClient, useQuery } from "@apollo/react-hooks";

import { Button, Submit, Field } from "./Inputs";
import { TRY_LOGIN, LOGGED_IN_USER } from "../quries";

class LoginBoxComponent extends Component {
    state = {
        email: "",
        password: "",
        message: "",
        active: {
            email: "",
            password: "",
        },
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.email) {
            this.setState({ message: "E-mail is required." });
        } else if (!this.state.password) {
            this.setState({ message: "Password is required." });
        } else {
            const { data, error } = useQuery(TRY_LOGIN, {
                variables: { email: this.state.email },
            });
            if (error) {
                this.setState({ message: "Invalid email or password" });
            } else {
                this.setState({ message: "" });
                // const client = useApolloClient();
                this.client.writeData({ data: { loggedInUser: { data } } });
            }
        }
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if (this.props.loggedInUser.id === 0) {
            this.setState({ message: "" });
        }
    };

    handleCancle = () => {
        this.props.loginCancel();
    };

    handleActive = (e) => {
        let active = { ...this.state.active };
        if (e.type === "mouseover" || e.type === "focus") {
            active[e.target.name] = "active";
            this.setState({ active: active });
        } else if (
            e.type === "mouseleave" &&
            document.activeElement.id !== e.target.name
        ) {
            active[e.target.name] = "";
            this.setState({ active: active });
        } else if (e.type === "blur") {
            active[e.target.name] = "";
            this.setState({ active: active });
        }
    };

    render() {
        /* let { data } = useQuery(LOGGED_IN_USER);
        let message = data.id === 0 ? "Invalid email or password" : null; */
        let message;
        return (
            <div className="login-box">
                <form className="form-container" onSubmit={this.handleSubmit}>
                    <Field
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        labelText="E-mail"
                        cssClass="login-field"
                        onActive={this.handleActive}
                        isActive={this.state.active.email}
                    />
                    <Field
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        labelText="Password"
                        cssField="login-field"
                        onActive={this.handleActive}
                        isActive={this.state.active.password}
                    />
                    <div className="warning">
                        {message ? message : this.state.message}
                    </div>
                    <div className="buttons">
                        <Button
                            value="Cancel"
                            onClick={this.handleCancle}
                            name="cancel"
                            cssButton="cancel"
                        />
                        <Submit value="Login" name="login" cssButton="login" />
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginBoxComponent;
