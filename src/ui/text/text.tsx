import React from 'react';
import styles from './text.module.sass'

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