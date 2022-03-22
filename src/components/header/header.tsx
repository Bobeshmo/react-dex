import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../core/redux/store";
import {Profile, Logo} from "../../assets/icons/icons";
import styles from './header.module.sass'

export function Header() {
    const userName = useSelector((state : RootState) => state.auth.user)

    return (
        <div className={styles.Header}>
            <div>
                <Logo/>
                <div className={styles.profile}>
                    <span>{userName}</span>
                    <Profile/>
                </div>
            </div>
        </div>
    );
}