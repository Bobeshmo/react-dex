import React from 'react';
import {NavLink} from "react-router-dom";
import {GroupPerson, LogOut, Person} from '../../assets/icons/icons'
import styles from './navbar.module.sass'

export const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <div>
                <nav>
                    <NavLink
                        end
                        to="/teams"
                        className={({isActive}) =>
                            styles.Link + ' ' +
                            (isActive ? styles.Active : '')
                        }
                    >
                        <GroupPerson/>
                        <span>Teams</span>
                    </NavLink>
                    <NavLink
                        end
                        to="/players"
                        className={({isActive}) =>
                            styles.Link + ' ' +
                            (isActive ? styles.Active : '')
                        }
                    >
                        <Person/>
                        <span>Players</span>
                    </NavLink>
                </nav>
                <div className={styles.SignOut}>
                    <LogOut/>
                    <span>Sign out</span>
                </div>
            </div>
        </div>
    );
};