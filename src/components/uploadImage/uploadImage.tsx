import React, {FC} from 'react';
import {AddImage} from "../../assets/icons/icons";
import {UseFormRegister} from "react-hook-form";
import styles from "./uploadImage.module.sass";

interface IProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    register: UseFormRegister<any>;
    required?: boolean;
    name: string
}

export const UploadImage: FC<IProps> = ({onChange, register, required, name}) => {
    return (
        <div className={styles.UploadImage}>
            <input
                {...register(name, {required})}
                type="file"
                onChange={onChange}
            />
            <AddImage/>
        </div>
    );
};