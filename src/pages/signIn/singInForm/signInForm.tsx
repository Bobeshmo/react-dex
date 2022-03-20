import React, {useEffect} from 'react';
import {Password} from "../../../ui/input/password/password";
import {Button} from "../../../ui/button/button";
import {Input} from '../../../ui/input/input';
import {Text} from "../../../ui/text/text";
import {NavLink, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {login as onHandleLogin} from "../../../core/redux/actions/auth";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from 'yup';

function SignInForm(props: any) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (props.user) {
            navigate("/")
        }
    }, [props.user])

    const validationSchema = Yup.object({
        login: Yup.string().required(),
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
        dispatch(onHandleLogin(data.login, data.password))
    })

    return (
        <>
            <form onSubmit={onHandleSubmit}>
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
                <Button disabled={!isValid} text="Sign In"/>
                <Text>Not a member yet? <NavLink to="/register">Sign up</NavLink></Text>
            </form>
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user,
    };
}

export default connect(mapStateToProps)(SignInForm)