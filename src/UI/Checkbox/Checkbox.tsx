import React from 'react';
import './Checkbox.css'

interface ICheckbox {
    text: string;
}

function Checkbox({text}: ICheckbox) {
    return (
        <div className="Checkbox">
            <input type="checkbox"/>
            <label>{text}</label>
        </div>
    );
}

export default Checkbox;