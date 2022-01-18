import React from 'react';
import {UseFormRegister} from "react-hook-form";
import './checkbox.css'

interface ICheckbox {
    text: string;
    name: string;
    register: UseFormRegister<any>;
    required?: boolean;
    error?: string;
}

export function Checkbox({text, name, register, required, error}: ICheckbox) {
    return (
        <div className="Checkbox">
            <div>
                <input
                    {...register(name, {required})}
                    name={name}
                    type="checkbox"
                />
                <label>{text}</label>
            </div>
            {error ? <span>{error}</span> : null}
        </div>
    );
}