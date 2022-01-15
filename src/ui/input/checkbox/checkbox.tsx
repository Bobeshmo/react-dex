import React from 'react';
import './checkbox.css'

interface ICheckbox {
    text: string;
    checked?: boolean;
    setChecked?: any;
}

export function Checkbox({text, checked, setChecked}: ICheckbox) {

    function toggle(value:boolean){
        return !value;
    }

    return (
        <div className="Checkbox">
            <input
                checked={checked}
                onChange={() => setChecked(toggle)}
                type="checkbox"
            />
            <label>{text}</label>
        </div>
    );
}