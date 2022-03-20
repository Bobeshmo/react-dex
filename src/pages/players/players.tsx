import React from 'react';
import styles from './players.module.css'
import Header from "../../components/header/header";
import {Navbar} from "../../components/navbar/navbar";

export const Players = () => {
    return (
        <div className={styles.Players}>
            <Header />
            <main>
                <Navbar />
            </main>
        </div>
    );
};
