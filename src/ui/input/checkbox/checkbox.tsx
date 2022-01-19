import React from 'react';
import {UseFormRegister} from "react-hook-form";
import styles from './checkbox.module.css'

interface ICheckbox {
    text: string;
    name: string;
    register: UseFormRegister<any>;
    required?: boolean;
    error?: string;
}

export function Checkbox({text, name, register, required, error}: ICheckbox) {
    return (
        <div className={styles.Checkbox}>
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