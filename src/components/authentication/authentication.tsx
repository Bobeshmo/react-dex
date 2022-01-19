import React from 'react';
import './authentication.css'
import {GetIcon} from "../../assets/icons/icons";
import {Notification} from "../notification/notification";
import {connect} from "react-redux";

interface IAuthentication {
    children: React.ReactNode
    icon: string;
    message: string | null
}

const Authentication = (props: IAuthentication)  => {
    return (
        <div className="Authentication">
            <div className="form">
                <div className="Authentication_form">
                    {props.children}
                </div>
            </div>
            <div className="group">
                <img src={GetIcon(props.icon)} alt="Group"/>
            </div>
            {props.message ? <Notification>{props.message}</Notification> : null}
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        message: state.auth.message,
    };
}

export default connect(mapStateToProps)(Authentication)