import React from 'react';
import SignInForm from "./singInForm/signInForm";
import Authentication from "../../components/authentication/authentication";

export function SignIn() {
    return (
        <React.Fragment>
            <Authentication icon="Group">
                <SignInForm />
            </Authentication>
        </React.Fragment>
    );
}