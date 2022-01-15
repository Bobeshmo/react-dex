import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Checkbox} from "../../../ui/input/checkbox/checkbox";
import {Password} from "../../../ui/input/password/password";
import {Button} from "../../../ui/button/button";
import {Input} from "../../../ui/input/input";
import {Text} from "../../../ui/text/text";
import {NavLink, useNavigate} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import {register as onHandleRegister} from "../../../core/redux/actions/auth";

function SignUpForm(props: any) {
    const [name, setName] = useState<string>("")
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [checked, setChecked] = useState<boolean>(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function onHandleSubmit(e: SyntheticEvent) {
        e.preventDefault()

        dispatch(onHandleRegister(name ,login, password))
    }

    function onHandleCheck() {
        return !(name && login && password && confirmPassword && password === confirmPassword && checked);
    }

    useEffect(() => {
        if (props.user) {
            navigate("/")
        }
    })

    return (
        <>
            <form onSubmit={onHandleSubmit}>
                <h1>Sign Up</h1>
                <Input label="Name" value={name} setValue={setName}/>
                <Input label="Login" value={login} setValue={setLogin}/>
                <Password
                    label="Password"
                    setValue={setPassword}
                    value={password}
                />
                <Password
                    label="Enter your password again"
                    setValue={setConfirmPassword}
                    value={confirmPassword}
                />
                <Checkbox checked={checked} setChecked={setChecked} text="I accept the agreement"/>
                <Button disabled={onHandleCheck()} text="Sign Up"/>
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