import React from 'react';
import {AuthService} from "../../api/services/authService";
import {NavLink, useLocation} from "react-router-dom";
import {
    GroupPerson,
    LogOut,
    Person
} from '../../assets/icons/icons'
import classNames from "classnames";
import styles from './navbar.module.sass'

export const Navbar = () => {
    const location = useLocation();

    return (
        <div className={styles.Navbar}>
            <div>
                <nav>
                    <NavLink
                        end
                        to="/teams"
                        className={classNames(styles.Link, {[styles.Active]: location.pathname.startsWith('/team')})}
                    >
                        <GroupPerson/>
                        <span>Teams</span>
                    </NavLink>
                    <NavLink
                        end
                        to="/players"
                        className={classNames(styles.Link, {[styles.Active]: location.pathname.startsWith('/player')})}
                    >
                        <Person/>
                        <span>Players</span>
                    </NavLink>
                </nav>
                <div
                    onClick={() => AuthService.logOut()}
                    className={styles.SignOut}
                >
                    <LogOut/>
                    <span>Sign out</span>
                </div>
            </div>
        </div>
    );
};