import React, {FC} from 'react';
import styles from './card.module.sass';

interface Props {
    name: string;
    image: string;
    foundationYear: number;
}

export const Card: FC<Props> = ({image, name, foundationYear}) => {
    return (
        <div className={styles.TeamCard}>
            <div className={styles.Image}>
                {image ? <img src={image} alt={name}/> : "No photo yet"}
            </div>
            <div className={styles.Info}>
                <h3 className={styles.Name}>{name}</h3>
                <p className={styles.foundationYear}>Year of foundation: {foundationYear}</p>
            </div>
        </div>
    );
}