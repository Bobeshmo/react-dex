import React, {useState} from 'react';
import styles from './password.module.sass'
import {GetIcon} from "../../../assets/icons/icons";
import {UseFormRegister} from "react-hook-form"

interface IPasswordProps {
    children?: React.ReactNode;
    placeholder?: string;
    width?: string | number;
    height?: string | number;
    label: string;
    error?: string;
    name: string
    register: UseFormRegister<any>;
    required?: boolean;
}

export function Password(
    {
        placeholder,
        width,
        height,
        label,
        error,
        name,
        register,
        required
    }: IPasswordProps) {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className={styles.Input}>
            {label ? <label>{label}</label> : null}
            <div>
                <input
                    {...register(name, {required})}
                    name={name}
                    type={passwordShown ? 'text' : 'password'}
                    placeholder={placeholder}
                    style={{width: width, height: height}}
                />
                <img onClick={togglePassword} src={passwordShown ? GetIcon('Close_eye') : GetIcon('Eye')} alt="Icon"/>
            </div>
            {error ? <span>{error}</span> : null}
        </div>
    );
}