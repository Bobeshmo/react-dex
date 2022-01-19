import React from 'react';
import styles from './home.module.css'
import Header from "../../components/header/header";

export function Home() {
    return (
        <div className={styles.Home}>
            <Header />
        </div>
    );
}