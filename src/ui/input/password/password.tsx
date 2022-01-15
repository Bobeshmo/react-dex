import React, {useState} from 'react';
import '../input.css'
import './password.css'
import {GetIcon} from "../../../assets/icons/icons";

interface IPasswordProps {
    children?: React.ReactNode;
    placeholder?: string;
    width?: string | number;
    height?: string | number;
    label: string;
    error?: string;
    setValue?: any;
    value?: any;
}

export function Password({placeholder, width, height, label, error, setValue, value}: IPasswordProps) {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className="Input">
            {label ? <label>{label}</label> : null}
            <div>
                <input
                    type={passwordShown ? 'text' : 'password'}
                    placeholder={placeholder}
                    style={{width: width, height: height}}
                    onChange={(e) => setValue(e.currentTarget.value)}
                    value={value}
                />
                <img onClick={togglePassword} src={passwordShown ? GetIcon('Close_eye') : GetIcon('Eye')} alt="Icon"/>
            </div>
            {error ? <span>{error}</span> : null}
        </div>
    );
}