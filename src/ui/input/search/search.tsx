import React from 'react';
import {Search as Icon} from '../../../assets/icons/icons'
import styles from './search.module.sass';

export const Search = () => {
    return (
        <div className={styles.Search}>
            <input type="text" placeholder="Search..."/>
            <Icon/>
        </div>
    );
}