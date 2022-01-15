import React from 'react';
import './text.css'

interface IText {
    children: React.ReactNode;
}

export function Text({children}: IText) {
    return (
        <div className="Text">
            {children}
        </div>
    );
}