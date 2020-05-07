import "./Style/LoginBoxComponent.css";

import React, { Component } from "react";
import { useApolloClient, useLazyQuery } from "@apollo/react-hooks";

import { useForm } from "../hooks";
import { Button, Submit, Field } from "./Inputs";
import { TRY_LOGIN } from "../quries";

const LoginBoxComponent = () => {
    const { handleChange, handleSubmit, values } = useForm(
        (credentials) => loginUser(),
        { email: "", password: "" }
    );
    /* handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.email) {
            this.setState({ message: "E-mail is required." });
        } else if (!this.state.password) {
            this.setState({ message: "Password is required." });
        } else {
            const { data, error } = useLazyQuery(TRY_LOGIN, {
                variables: { email: this.state.email },
            });
            if (error) {
                this.setState({ message: "Invalid email or password" });
            } else {
                this.client.writeData({ data: { loggedInUser: { data } } });
                this.setState({ message: "" });
            }
        }
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }; */

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
    return (
        <div className="login-box">
            <form className="form-container" onSubmit={handleSubmit}>
                <Field
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    labelText="E-mail"
                    cssClass="login-field"
                    onActive={this.handleActive}
                    isActive={this.state.active.email}
                />
                <Field
                    type="password"
                    id="password"
                    value={password}
                    onChange={handleChange}
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
                        id="cancel"
                        cssButton="cancel"
                    />
                    <Submit value="Login" id="login" cssButton="login" />
                </div>
            </form>
        </div>
    );
};

export default LoginBoxComponent;
