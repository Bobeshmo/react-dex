import React, {useEffect, useState} from 'react';
import {GetIcon} from '../../Assets/Icons/Icons';
import './Header.css'

function Header() {
    const [userName, setUserName] = useState<string | null>(null)

    useEffect(() => {
        setUserName(localStorage.getItem('userName'))
    }, [])

    return (
        <div className="Header">
            <div>
                <img src={GetIcon("Logo")} alt="Logo"/>
                <div className="profile">
                    <span>{userName}</span>
                    <img src={GetIcon("Profile")} alt="Profile"/>
                </div>
            </div>
        </div>
    );
}

export default Header;