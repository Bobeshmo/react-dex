import React from 'react';
import SignInForm from "./singInForm/signInForm";
import Authentication from "../../components/authentication/authentication";

export function SignIn() {
    return (
        <div className="SignIn">
            <Authentication icon="Group">
                <SignInForm />
            </Authentication>
        </div>
    );
}