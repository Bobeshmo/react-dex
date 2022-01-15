import React from 'react';
import './button.css'

interface IButtonProps {
    children?: React.ReactNode;
    text: string;
    width?: string | number;
    height?: string | number;
    disabled?: boolean;
}

export function Button({text, height, width, disabled=false, children}: IButtonProps) {
    return (
        <>
            <button
                disabled={disabled}
                style={{height: height, width: width}}
                className="btn"
            >
                {text}
                {children}
            </button>
        </>
    );
}