import React from 'react';

const Button = (props) => {
    //const buttonLabel = 'Submit';

    return (
        <button
            type={props.type}
            className={props.className}
            style={props.style}
            onClick={props.clickHandler}
        >
            {props.label}
        </button>
    );
};

export default Button;
