import React from 'react';
import styles from './authentication.module.css'
import {GetIcon} from "../../assets/icons/icons";
import {Notification} from "../../ui/notification/notification";
import {connect} from "react-redux";

interface IAuthentication {
    children: React.ReactNode
    icon: string;
    message: string | null
}

const Authentication = (props: IAuthentication)  => {
    return (
        <div className={styles.Authentication}>
            <div className={styles.form}>
                <div className={styles.Authentication_form}>
                    {props.children}
                </div>
            </div>
            <div className={styles.group}>
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