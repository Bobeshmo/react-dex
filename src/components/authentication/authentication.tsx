import React, {FC} from 'react';
import './authentication.css'
import {GetIcon} from "../../assets/icons/icons";

interface IAuthentication {
    icon: string;
}

export const Authentication : FC<IAuthentication> = ({children, icon})  => {
    return (
        <div className="Authentication">
            <div className="form">
                <div className="Authentication_form">
                    {children}
                </div>
            </div>
            <div className="group">
                <img src={GetIcon(icon)} alt="Group"/>
            </div>
        </div>
    );
}