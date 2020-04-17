import "./Style/App.css";

import React, { Component } from "react";
import { useQuery } from "@apollo/react-hooks";

import NavBar from "./NavBar";
import NavMenu from "./NavMenu";
import LoginBar from "./LoginBar";
import LoginBox from "./LoginBox";
import Overlay from "./Overlay";
import { LOGGED_IN_USER, GET_PERSON_BY_ID, GET_ALL_PERSONS } from "../quries";

const Test = () => {
    const { data } = useQuery(GET_ALL_PERSONS);
    console.log(data);
    return <div>Test</div>;
};

class App extends Component {
    state = {
        showLogin: false,
    };

    componentDidMount = () => {
        /* if (!localStorage.getItem("userID")) {
            localStorage.setItem("userID", 0);
            this.client.writeData({ data: { loggedInUser: { id: 0 } } });
        } else {
            const { data } = useQuery(GET_PERSON_BY_ID, {
                variables: { id: localStorage.getItem("userID") },
            });
            this.client.writeData({ data: { loggedInUser: data } });
        } */
    };

    componentDidUpdate = () => {
        /* if (useQuery(LOGGED_IN_USER).id > 0 && this.state.showLogin) {
            this.setState({ showLogin: false });
        } */
    };

    handleShowLogin = () => {
        this.setState({ showLogin: true });
    };

    handleSignUp = () => {
        alert("Sign Up!");
    };

    handleLoginCancel = () => {
        this.setState({ showLogin: false });
    };

    render() {
        return (
            <div className="app-body">
                {this.state.showLogin && (
                    <Overlay>
                        <LoginBox loginCancel={this.handleLoginCancel} />
                    </Overlay>
                )}
                <Test />
                <NavBar>
                    <NavMenu />
                    <LoginBar
                        showLogin={this.handleShowLogin}
                        signUp={this.handleSignUp}
                    />
                </NavBar>
            </div>
        );
    }
}

export default App;
