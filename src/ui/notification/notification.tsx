import React, {FC} from "react";
import styles from "./notification.module.sass"

export const Notification: FC = ({children}) => {
    return (
        <div className={styles.Notification}>
            {children}
        </div>
    );
}