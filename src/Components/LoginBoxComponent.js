import "./Style/LoginBoxComponent.css";
import React, { Component } from "react";
import InputComponent from "./InputComponent";

class LoginBoxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            active: {
                email: "",
                password: ""
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCancle = this.handleCancle.bind(this);
        this.handleActive = this.handleActive.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.loginSubmit(this.state.email, this.state.password);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleCancle() {
        this.props.loginCancel();
    }

    handleActive(e) {
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
    }

    render() {
        return (
            <div className="login-box">
                <form className="form-container" onSubmit={this.handleSubmit}>
                    <InputComponent
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        lableText="E-mail"
                        cssClass="login-field"
                        onActive={this.handleActive}
                        isActive={this.state.active.email}
                    />
                    <InputComponent
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        lableText="Password"
                        cssClass="login-field"
                        onActive={this.handleActive}
                        isActive={this.state.active.password}
                    />
                    <div className="warning">{this.props.loginResult}</div>
                    <div className="buttons">
                        <InputComponent
                            type="button"
                            value="Cancel"
                            onClick={this.handleCancle}
                            name="cancel"
                            cssClass="cancel-button"
                        />
                        <InputComponent
                            type="submit"
                            value="Login"
                            name="login"
                            cssClass="login-button"
                        />
                    </div>
                </form>
            </div>
        );
    }
}
export default LoginBoxComponent;
