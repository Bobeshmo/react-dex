import React from 'react';
import {Authentication} from "../../components/authentication/authentication";
import {SignInForm} from "./singInForm/signInForm";
import {Group} from "../../assets/icons/icons";

export function SignIn() {
    return (
        <React.Fragment>
            <Authentication icon={<Group/>}>
                <SignInForm />
            </Authentication>
        </React.Fragment>
    );
}