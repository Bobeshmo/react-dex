import React from 'react';
import styles from './team.module.sass'
import {Navbar} from "../../components/navbar/navbar";
import Header from "../../components/header/header";

export const Team = () => {
    return (
        <div className={styles.Teams}>
            <Header />
            <main>
                <Navbar />
            </main>
        </div>
    );
};