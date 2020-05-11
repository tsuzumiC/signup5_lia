import "./style/App.css";

import React from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";

import Events from "./Events";

const App = () => {
    return (
        <>
            <div style={{ width: "200px" }}>
                <ul
                    style={{
                        height: "40px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        listStyle: "none",
                        padding: 0,
                        fontSize: "24px",
                    }}
                >
                    <li>
                        <NavLink
                            exact
                            to="/"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red",
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/events"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red",
                            }}
                        >
                            Events
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path="/">
                    <div>Home</div>
                </Route>
                <Route path="/events">
                    <Events />
                </Route>
            </Switch>
        </>
    );
};

export default App;
