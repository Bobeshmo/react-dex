import React, {useEffect} from 'react';
import {Checkbox} from "../../../ui/input/checkbox/checkbox";
import {Password} from "../../../ui/input/password/password";
import {Button} from "../../../ui/button/button";
import {Input} from "../../../ui/input/input";
import {Text} from "../../../ui/text/text";
import {NavLink, useNavigate} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import {register as onHandleRegister} from "../../../core/redux/actions/auth";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from 'yup';

function SignUpForm(props: any) {
    const validationSchema = Yup.object({
        name: Yup.string().required(),
        login: Yup.string().required(),
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
        mode: "onChange",
        resolver: yupResolver(validationSchema)
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onHandleSubmit = handleSubmit((data) => {
        dispatch(onHandleRegister(data.name, data.login, data.password))
    })

    useEffect(() => {
        if (props.user) {
            navigate("/")
        }
    })

    return (
        <>
            <form onSubmit={onHandleSubmit}>
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
                <Checkbox error={errors.check?.message} register={register} required name="check" text="I accept the agreement"/>
                <Button disabled={!isValid} text="Sign Up"/>
                <Text>Already a member? <NavLink to="/login">Sign in</NavLink></Text>
            </form>
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user
    };
}

export default connect(mapStateToProps)(SignUpForm)