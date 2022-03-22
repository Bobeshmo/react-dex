import React, {useState} from 'react';
import {UseFormRegister} from "react-hook-form"
import {CloseEye, Eye} from "../../../assets/icons/icons";
import styles from './password.module.sass'

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
                <div className={styles.Eye} onClick={togglePassword}>
                    {
                        passwordShown ? <CloseEye/> : <Eye/>
                    }
                </div>
            </div>
            {error ? <span>{error}</span> : null}
        </div>
    );
}