import React from 'react';
import {NoMatch as NoMatchIcon} from "../../assets/icons/icons";
import styles from './noMatch.module.sass'

export const NoMatch = (props) => {
    return (
        <div className={styles.NoMatch}>
            <div>
                <NoMatchIcon/>
                <h1>Page not found</h1>
                <span>Sorry, we can’t find what you’re looking for</span>
            </div>
        </div>
    );
}