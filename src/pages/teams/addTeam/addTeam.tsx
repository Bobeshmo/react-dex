import React, {useState} from 'react';
import {ImageService} from "../../../api/services/imageService";
import {Header} from "../../../components/header/header";
import {Navbar} from "../../../components/navbar/navbar";
import {Input} from "../../../ui/input/input";
import {Button} from "../../../ui/button/button";
import {UploadImage} from "../../../components/uploadImage/uploadImage";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";
import styles from './addTeam.module.sass';

const formData = new FormData();

export const AddTeam = () => {
    const [imageUrl, setImageUrl] = useState<string>("")
    const navigate = useNavigate()

    const validationSchema = Yup.object({
        name: Yup.string().required(),
        division: Yup.string().required(),
        conference: Yup.string().required(),
        yearOfFoundation: Yup.number()
            .typeError('Year of foundation must be a number')
            .min(1900, "Date must be greater than 1900")
            .max(new Date().getFullYear(), 'Date is greater than the current year')
            .required(),
        image: Yup.mixed().test("image", "Image required", (value) => {
            return value.length > 0;
        }),
    }).required();

    const {
        register,
        formState: {errors, isValid},
        handleSubmit
    } = useForm({
        mode: "all",
        resolver: yupResolver(validationSchema)
    })

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files)
            formData.append('file', e.target.files[0])
    }

    const onHandleSubmit = handleSubmit((data) => {
        ImageService.saveImage(formData).then(r => {
            setImageUrl(String(r))
        });

    });

    return (
        <div className={styles.AddTeam}>
            <Header/>
            <main>
                <Navbar/>
                <div className={styles.Content}>
                    <div className={styles.Form}>
                        <div className={styles.Title}>Teams <span>/</span> Add new team</div>
                        <form onSubmit={onHandleSubmit}>
                            <UploadImage
                                name="image"
                                register={register}
                                required
                                onChange={e => {
                                    onHandleChange(e)
                                }}
                            />
                            <div className={styles.Fields}>
                                <Input
                                    error={errors.name?.message}
                                    label='Name'
                                    name='name'
                                    register={register}
                                    required
                                />
                                <Input
                                    error={errors.division?.message}
                                    label='Division'
                                    name='division'
                                    register={register}
                                    required
                                />
                                <Input
                                    error={errors.conference?.message}
                                    label='Conference'
                                    name='conference'
                                    register={register}
                                    required
                                />
                                <Input
                                    error={errors.yearOfFoundation?.message}
                                    label='Year of foundation'
                                    name='yearOfFoundation'
                                    register={register}
                                    required
                                />
                                <div className={styles.Buttons}>
                                    <Button onClick={() => navigate('/teams')} text="Cancel"/>
                                    <Button type='submit' disabled={!isValid} text="Save"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};