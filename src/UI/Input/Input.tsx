import React, {useState} from 'react';
import './Input.css'
import {GetIcon} from '../../Assets/Icons/Icons'

interface IInputProps {
    children?: React.ReactNode;
    type?: string
    placeholder?: string;
    width?: string | number;
    height?: string | number;
    label: string;
    error?: string;
    setValue?: any;
    value?: any;
}

function Input({type = "text", placeholder, width, height, label, error, setValue, value}: IInputProps) {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className="Input">
            {label ? <label>{label}</label> : null}
            <div>
                {
                    type === 'password' ?
                        <>
                            <input
                                type={passwordShown ? 'text' : type}
                                placeholder={placeholder}
                                style={{width: width, height: height}}
                                onChange={(e) => setValue(e.currentTarget.value)}
                                value={value}
                            />
                            <img onClick={togglePassword} src={passwordShown ? GetIcon('Close_eye') : GetIcon('Eye')} alt="Icon"/>
                        </> :
                        <input
                            type={type}
                            placeholder={placeholder}
                            style={{width: width, height: height}}
                            onChange={(e) => setValue(e.currentTarget.value)}
                            value={value}
                        />
                }
            </div>
            {error ? <span>{error}</span> : null}
        </div>
    );
}

export default Input;