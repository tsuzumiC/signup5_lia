import React from 'react';

const InputComponent = (props) => {
    return (
        <div className="input-container">
            <label className="input-lable" htmlFor={props.name}>{props.lableText}</label>
            <input className="input-field" type={props.type} value={props.value} name={props.name} id={props.name} onChange={props.onChange} onClick={props.onClick} />
        </div>
    );
};

InputComponent.defaultProps = {
    type: "text",
    name: "input"
}

export default InputComponent;