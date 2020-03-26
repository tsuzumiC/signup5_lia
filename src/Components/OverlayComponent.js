import "./Style/OverlayComponent.css";
import React from "react";

const OverlayComponent = props => {
    return (
        <div className="background">
            <div className={props.childDisplay}>{props.children}</div>
        </div>
    );
};
OverlayComponent.defaultProps = {
    childDisplay: ""
};
export default OverlayComponent;
