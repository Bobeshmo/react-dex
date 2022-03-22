import React from 'react';
import {Notification} from "../../ui/notification/notification";
import {useSelector} from "react-redux";
import {RootState} from "../../core/redux/store";
import styles from './authentication.module.sass'

interface IAuthentication {
    children: React.ReactNode
    icon: React.ReactNode;
}

export const Authentication = (props: IAuthentication)  => {
    const errorMessage = useSelector((state : RootState) => state.auth.message)

    return (
        <div className={styles.Authentication}>
            <div className={styles.form}>
                <div className={styles.Authentication_form}>
                    {props.children}
                </div>
            </div>
            <div className={styles.group}>
                {props.icon}
            </div>
            {errorMessage ? <Notification>{errorMessage}</Notification> : null}
        </div>
    );
}