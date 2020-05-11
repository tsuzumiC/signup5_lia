import "./style/App.css";

import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import Events from "./Events";
import EventCreator from "./EventCreator";

const App = () => {
    return (
        <>
            <div style={{ width: "300px" }}>
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
                    <li>
                        <NavLink
                            to="/new-event"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red",
                            }}
                        >
                            New Event
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
                <Route path="/new-event">
                    <EventCreator />
                </Route>
            </Switch>
        </>
    );
};

export default App;
