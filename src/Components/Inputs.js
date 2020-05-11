import "./style/Input.css";

import React from "react";

export const Submit = (props) => {
    return (
        <input
            type="submit"
            key={props.key ? props.key : props.id}
            name={props.name ? props.name : props.id}
            id={props.id}
            value={props.value}
            className={`${props.cssButton} button`}
        />
    );
};

export const Button = (props) => {
    return (
        <input
            type="button"
            key={props.key ? props.key : props.id}
            name={props.name ? props.name : props.id}
            id={props.id}
            value={props.value}
            onClick={props.onClick}
            className={`${props.cssButton} button`}
        />
    );
};

export const Radio = (props) => {
    return (
        <>
            <label htmlFor={props.id}>{props.labelText}</label>
            <input
                type="radio"
                key={props.key ? props.key : props.id}
                id={props.id}
                name={props.name ? props.name : props.id}
                value={props.value}
                onChange={props.onChange}
                checked={props.compare === props.value}
            />
        </>
    );
};

export const Field = (props) => {
    return (
        <div className={`${props.cssContainer} container`}>
            <label
                className={`${props.cssLabel} label ${
                    props.value ? "active" : props.isActive
                }`}
                htmlFor={props.id}
            >
                {props.labelText}
            </label>
            <input
                className={`${props.cssField} field ${props.isActive}`}
                key={props.key ? props.key : props.id}
                id={props.id}
                name={props.name ? props.name : props.id}
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
