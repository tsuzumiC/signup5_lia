import "./Style/Input.css";

import React from "react";

export const Submit = (props) => {
    return (
        <input
            type="submit"
            value={props.value}
            className={`${props.cssButton} button`}
        />
    );
};

export const Button = (props) => {
    return (
        <input
            type="button"
            value={props.value}
            onClick={props.onClick}
            className={`${props.cssButton} button`}
        />
    );
};

export const Field = (props) => {
    return (
        <div className={`${props.cssContainer} container`}>
            <label
                className={`${props.cssLabel} label ${
                    props.value ? "active" : props.isActive
                }`}
                htmlFor={props.name}
            >
                {props.labelText}
            </label>
            <input
                className={`${props.cssField} field ${props.isActive}`}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                onMouseOver={props.onActive}
                onMouseLeave={props.onActive}
                onFocus={props.onActive}
                onBlur={props.onActive}
            />
        </div>
    );
};

Field.defaultProps = {
    type: "text",
    name: "field",
};
