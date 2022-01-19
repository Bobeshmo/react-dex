import React from 'react';
import styles from './text.module.css'

interface IText {
    children: React.ReactNode;
}

export function Text({children}: IText) {
    return (
        <div className={styles.Text}>
            {children}
        </div>
    );
}