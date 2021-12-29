import React from 'react';
import './Authentication.css'
import {GetIcon} from "../../Assets/Icons/Icons";

interface IAuthentication {
    children: React.ReactNode;
    icon: string;
}

function Authentication({children, icon}: IAuthentication) {
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

export default Authentication;