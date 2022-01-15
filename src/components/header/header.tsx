import React from 'react';
import {GetIcon} from '../../assets/icons/icons';
import {connect} from "react-redux";
import './header.css'

function Header(props: any) {
    return (
        <div className="Header">
            <div>
                <img src={GetIcon("Logo")} alt="Logo"/>
                <div className="profile">
                    <span>{props.user}</span>
                    <img src={GetIcon("Profile")} alt="Profile"/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user
    };
}

export default connect(mapStateToProps)(Header);