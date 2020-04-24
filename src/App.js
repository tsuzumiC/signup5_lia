import "./Components/Style/App.css";

import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home, Events } from "./routes";

const App = () => {
    return (
        <Switch>
            <Route path={`/events`}>
                <Events />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
};

export default App;
