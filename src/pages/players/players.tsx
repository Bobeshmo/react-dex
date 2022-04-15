import React from 'react';
import {Header} from "../../components/header/header";
import {Navbar} from "../../components/navbar/navbar";
import styles from './players.module.sass'

export const Players = () => {
    return (
        <div className={styles.Players}>
            <Header/>
            <main>
                <Navbar/>
            </main>
        </div>
    );
};