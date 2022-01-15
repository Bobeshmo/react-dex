import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Password} from "../../../ui/input/password/password";
import {Button} from "../../../ui/button/button";
import {Input} from '../../../ui/input/input';
import {Text} from "../../../ui/text/text";
import {NavLink, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {login as onHandleLogin} from "../../../core/redux/actions/auth";
import {useDispatch} from "react-redux";

function SignInForm(props: any)  {
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const dispatch = useDispatch()
    const navigate = useNavigate()


    function onHandleSubmit(e: SyntheticEvent) {
        e.preventDefault()

        dispatch(onHandleLogin(login, password))
    }

    function onHandleCheck() {
        return !(login && password)
    }

    useEffect(() => {
        if (props.user) {
            navigate("/")
        }
    })

    return (
        <>
            <form onSubmit={onHandleSubmit}>
                <h1>Sign In</h1>
                <Input setValue={setLogin} value={login} label="Login"/>
                <Password
                    label="Password"
                    setValue={setPassword}
                    value={password}
                />
                <Button disabled={onHandleCheck()} text="Sign In"/>
                <Text>Not a member yet? <NavLink to="/register">Sign up</NavLink></Text>
            </form>
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user
    };
}

export default connect(mapStateToProps)(SignInForm)