import React, {FC} from "react";
import {UseFormRegister} from "react-hook-form"
import './input.css'

interface IInputProps {
    type?: string
    placeholder?: string;
    width?: string | number;
    height?: string | number;
    label: string;
    error?: string;
    name: string;
    register: UseFormRegister<any>;
    required?: boolean;
}

export const Input: FC<IInputProps> = (
    {
        type = "text",
        placeholder,
        width,
        height,
        label,
        error,
        name,
        register,
        required
    }) => {

    return (
        <div className="Input">
            {label ? <label>{label}</label> : null}
            <div>
                <input
                    {...register(name, {required})}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    style={{width: width, height: height}}
                />
            </div>
            {error ? <span>{error}</span> : null}
        </div>
    );
}