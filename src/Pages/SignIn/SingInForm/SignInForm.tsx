import React, {SyntheticEvent, useState} from 'react';
import Input from '../../../UI/Input/Input';
import Button from "../../../UI/Button/Button";
import Text from "../../../UI/Text/Text";
import {NavLink, useNavigate} from "react-router-dom";

function SignInForm() {
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate();

    async function onHandleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        if (login && password) {
            await fetch('http://dev.trainee.dex-it.ru/api/Auth/SignIn', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "login": login,
                    "password": password
                })
            }).then(response =>
                response.json().then(data => ({
                    data: data,
                    status: response.status
                })).then(res => {
                    setLogin('')
                    setPassword('')
                    if (res.status === 200) {
                        navigate('/')
                        localStorage.setItem("token", res.data.token);
                        localStorage.setItem("userName", res.data.name)
                        localStorage.setItem("avatarUrl", res.data.avatarUrl)
                    }
                })
            )
        }
    }

    return (
        <>
            <form onSubmit={onHandleSubmit}>
                <h1>Sign In</h1>
                <Input setValue={setLogin} value={login} label="Login"/>
                <Input
                    label="Password"
                    type="password"
                    setValue={setPassword}
                    value={password}
                />
                <Button text="Sign In"/>
                <Text>Not a member yet? <NavLink to="/register">Sign up</NavLink></Text>
            </form>
        </>
    );
}

export default SignInForm;