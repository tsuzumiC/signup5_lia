import "./Style/InputComponent.css";
import React from "react";

const InputComponent = props => {
    return (
        <div className="input-container">
            <label
                className={`input-lable ${
                    props.value ? "active" : props.isActive
                }`}
                htmlFor={props.name}
            >
                {props.lableText}
            </label>
            <input
                className={`${props.cssClass} ${props.isActive}`}
                type={props.type}
                value={props.value}
                name={props.name}
                id={props.name}
                onChange={props.onChange}
                onClick={props.onClick}
                onMouseOver={props.onActive}
                onMouseLeave={props.onActive}
                onFocus={props.onActive}
                onBlur={props.onActive}
            />
        </div>
    );
};

InputComponent.defaultProps = {
    type: "text",
    name: "input"
};

export default InputComponent;
