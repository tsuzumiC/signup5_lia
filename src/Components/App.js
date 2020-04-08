import "./Style/App.css";

import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "./NavBar";
import NavMenu from "./NavMenu";
import LoginBar from "./LoginBar";
import LoginBox from "./LoginBox";
import Overlay from "./Overlay";

class App extends Component {
    state = {
        showLogin: false,
    };

    componentDidUpdate = () => {
        if (this.props.loggedInUser.id > 0 && this.state.showLogin) {
            this.setState({ showLogin: false });
        }
    };

    handleShowLogin = () => {
        if (this.props.loggedInUser.id === null) {
            this.setState({ showLogin: true });
        }
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

const mapStateToProps = (state) => {
    return { loggedInUser: state.loggedInUser };
};

export default connect(mapStateToProps)(App);
