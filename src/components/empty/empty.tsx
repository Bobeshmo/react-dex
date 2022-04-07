import React, {FC} from 'react';
import styles from './empty.module.sass'

interface IEmpty {
    icon: React.ReactNode
    text: string
}

export const Empty : FC<IEmpty> = ({icon, text}) => {
    return (
        <div className={styles.Empty}>
            {icon}
            <h1>Empty here</h1>
            <span>{text}</span>
        </div>
    );
}