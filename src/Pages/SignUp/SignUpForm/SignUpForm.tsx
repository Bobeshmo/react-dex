import React, {SyntheticEvent, useState} from 'react';
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import Text from "../../../UI/Text/Text";
import {NavLink, useNavigate} from "react-router-dom";
import Checkbox from "../../../UI/Checkbox/Checkbox";

function SignUpForm() {
    const [name, setName] = useState<string>("")
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate();

    async function onHandleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        if (name && login && password && confirmPassword) {
            if (password === confirmPassword) {
                await fetch('http://dev.trainee.dex-it.ru/api/Auth/SignUp', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        "userName": name,
                        "login": login,
                        "password": password
                    })
                }).then(response =>
                    response.json().then(data => ({
                        data: data,
                        status: response.status
                    })).then(res => {
                        setName('')
                        setLogin('')
                        setPassword('')
                        setConfirmPassword('')
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
    }

    return (
        <>
            <form onSubmit={onHandleSubmit}>
                <h1>Sign Up</h1>
                <Input label="Name" value={name} setValue={setName}/>
                <Input label="Login" value={login} setValue={setLogin}/>
                <Input
                    label="Password"
                    type="password"
                    setValue={setPassword}
                    value={password}
                />
                <Input
                    label="Enter your password again"
                    type="password"
                    setValue={setConfirmPassword}
                    value={confirmPassword}
                />
                <Checkbox text="I accept the agreement"/>
                <Button text="Sign Up"/>
                <Text>Already a member? <NavLink to="/login">Sign in</NavLink></Text>
            </form>
        </>
    );
}

export default SignUpForm;