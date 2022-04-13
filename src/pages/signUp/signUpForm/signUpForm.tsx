import React, {useEffect} from 'react';
import {Checkbox} from "../../../ui/input/checkbox/checkbox";
import {Password} from "../../../ui/input/password/password";
import {Button} from "../../../ui/button/button";
import {Input} from "../../../ui/input/input";
import {Text} from "../../../ui/text/text";
import {Link, useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {register as onHandleRegister} from "../../../core/redux/actions/auth";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from 'yup';

export function SignUpForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useTypedSelector(state => state.auth.user)

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user]) // eslint-disable-line react-hooks/exhaustive-deps

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Name is a required field"),
        login: Yup.string()
            .required("Login is a required field"),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
        check: Yup.boolean().oneOf([true], 'You must be accept the agreement')
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
        dispatch(onHandleRegister(data.name, data.login, data.password))
    })

    return (
        <form onSubmit={onHandleSubmit} style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridGap: "25px",
        }}>
            <h1>Sign Up</h1>
            <Input
                register={register}
                required
                label="Name"
                name="name"
                error={errors.name?.message}
            />
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
            <Password
                register={register}
                required
                label="Enter your password again"
                name="confirmPassword"
                error={errors.confirmPassword?.message}
            />
            <Checkbox error={errors.check?.message} register={register} required name="check"
                      text="I accept the agreement"/>
            <Button disabled={!isValid} text="Sign Up"/>
            <Text>Already a member? <Link className="Link" to="/login">Sign in</Link></Text>
        </form>
    );
}