import "./Style/LoginBar.css";

import React from "react";
import { useQuery } from "react-apollo";

import { Button } from "./Inputs";
import { LOGGED_IN_USER } from "../quries";

const LoginBar = (props) => {
    return useQuery(LOGGED_IN_USER).id > 0 ? (
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

export default LoginBar;
