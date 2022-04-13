import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Profile, Logo} from "../../assets/icons/icons";
import styles from './header.module.sass'

export function Header() {
    const userName = useTypedSelector(state => state.auth.user)

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