import React, {FC} from "react";
import "./notification.css"

export const Notification: FC = ({children}) => {
    return (
        <div className="Notification">
            {children}
        </div>
    );
}