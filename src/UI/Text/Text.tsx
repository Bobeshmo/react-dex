import React from 'react';
import './Text.css'

interface IText {
    children: React.ReactNode;
}

function Text({children}: IText) {
    return (
        <div className="Text">
            {children}
        </div>
    );
}

export default Text;