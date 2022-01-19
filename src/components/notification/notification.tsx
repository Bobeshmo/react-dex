import React, {FC} from "react";
import styles from "./notification.module.css"

export const Notification: FC = ({children}) => {
    return (
        <div className={styles.Notification}>
            {children}
        </div>
    );
}