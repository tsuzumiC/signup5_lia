import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <Link to="/events">
            <h1>Events</h1>
        </Link>
    );
};
