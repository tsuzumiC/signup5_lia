import "./Style/LoginBar.css";

import React from "react";
import { connect } from "react-redux";

import { Button } from "./Inputs";
import { logOut } from "../actions";

const LoginBar = (props) => {
    return props.loggedInUser.id > 0 ? (
        <Button
            onClick={() => props.logOut()}
            value="Log out"
            cssButton="login"
        />
    ) : (
        <div className="show-login">
            <Button
                onClick={() => props.signUp()}
                value="Sign Up"
                cssButton="signup left"
            />
            <Button
                onClick={() => props.showLogin()}
                value="Login"
                cssButton="login right"
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return { loggedInUser: state.loggedInUser };
};

export default connect(mapStateToProps, { logOut })(LoginBar);
