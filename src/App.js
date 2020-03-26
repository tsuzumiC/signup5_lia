import "./App.css";
import React, { Component } from "react";
import DisableScroll from "disable-scroll";
import LoginBoxComponent from "./Components/LoginBoxComponent";
import OverlayComponent from "./Components/OverlayComponent";
import InputComponent from "./Components/InputComponent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedUser: null,
            loginResult: null,
            users: [
                {
                    name: "Erik",
                    id: "0001",
                    email: "erik@eriksson.se",
                    password: "1234"
                },
                {
                    name: "Anna",
                    id: "0002",
                    email: "anna@hotmail.com",
                    password: "ab23"
                }
            ],
            showLogin: false
        };
        this.checkLogin = this.checkLogin.bind(this);
        this.signUp = this.signUp.bind(this);
        this.startLogin = this.startLogin.bind(this);
        this.closeLogin = this.closeLogin.bind(this);
    }

    componentDidMount() {}

    checkLogin(email, password) {
        let result = null;
        if (!email) {
            this.setState({ loginResult: "E-mail is required." });
        } else if (!password) {
            this.setState({ loginResult: "Password is required." });
        } else {
            this.state.users.forEach(e => {
                if (e.email === email && e.password === password) {
                    result = e;
                }
            });
            if (result) {
                this.setState({
                    loggedUser: result,
                    loginResult: null,
                    showLogin: false
                });
                DisableScroll.off();
                alert(`Logged in as ${result.name}`);
            } else {
                this.setState({ loginResult: "Wrong email or password." });
            }
        }
    }

    signUp() {
        console.log("Test!");
    }

    startLogin() {
        this.setState({ showLogin: true, loginResult: "" });
        DisableScroll.on();
    }

    closeLogin() {
        this.setState({ showLogin: false, loginResult: "" });
        DisableScroll.off();
    }

    render() {
        let loginOverlay;
        if (this.state.showLogin === true) {
            loginOverlay = (
                <OverlayComponent>
                    <LoginBoxComponent
                        loginSubmit={this.checkLogin}
                        loginResult={this.state.loginResult}
                        loginCancel={this.closeLogin}
                    />
                </OverlayComponent>
            );
        }
        let userList =
            "Existing accounts to try: \n" +
            this.state.users.map(user => {
                return (
                    "E-mail: " +
                    user.email +
                    "\n" +
                    "Password: " +
                    user.password +
                    "\n"
                );
            });
        return (
            <div className="app-body">
                {loginOverlay}
                <div className="top-bar">
                    <InputComponent
                        type="button"
                        value="Sign up"
                        name="signup"
                        onClick={this.signUp}
                        cssClass="signup-button"
                    />
                    <InputComponent
                        type="button"
                        value="Login"
                        name="login"
                        onClick={this.startLogin}
                        cssClass="login-button"
                    />
                </div>
                <div
                    style={{
                        whiteSpace: "pre-line",
                        color: "#fff",
                        position: "relative",
                        top: "50px"
                    }}
                >
                    {userList}
                </div>
            </div>
        );
    }
}
export default App;
