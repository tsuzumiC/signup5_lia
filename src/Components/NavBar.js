import "./Style/NavBar.css";

import React from "react";

const NavBar = (props) => {
    return <div className="top-bar">{props.children}</div>;
};

export default NavBar;
