import React, {useEffect} from 'react';
import {Password} from "../../../ui/input/password/password";
import {Button} from "../../../ui/button/button";
import {Input} from '../../../ui/input/input';
import {Text} from "../../../ui/text/text";
import {Link, useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from 'yup';

export function SignInForm() {
    const navigate = useNavigate()
    const {onHandleLogin} = useActions()
    const user = useTypedSelector(state => state.auth.user)

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user]) // eslint-disable-line react-hooks/exhaustive-deps

    const validationSchema = Yup.object({
        login: Yup.string().required("Login is a required field"),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    }).required();

    const {
        register,
        formState: {errors, isValid},
        handleSubmit
    } = useForm({
        mode: "all",
        resolver: yupResolver(validationSchema)
    })

    const onHandleSubmit = handleSubmit((data) => {
        onHandleLogin(data.login, data.password)
    })

    return (
        <form onSubmit={onHandleSubmit} style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridGap: "25px",
        }}>
            <h1>Sign In</h1>
            <Input
                register={register}
                required
                label="Login"
                name="login"
                error={errors.login?.message}
            />
            <Password
                register={register}
                required
                label="Password"
                name="password"
                error={errors.password?.message}
            />
            <Button type='submit' disabled={!isValid} text="Sign In"/>
            <Text>Not a member yet? <Link className="Link" to="/register">Sign up</Link></Text>
        </form>
    );
}