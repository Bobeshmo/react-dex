import React from 'react';
import './Button.css'

interface IButtonProps {
    children?: React.ReactNode;
    text: string;
    width?: string | number;
    height?: string | number;
}

function Button({text, height, width, children}: IButtonProps) {

    return (
        <>
            <button
                style={{height: height, width: width}}
                className="btn"
            >
                {text}
                {children}
            </button>
        </>
    );
}

export default Button;