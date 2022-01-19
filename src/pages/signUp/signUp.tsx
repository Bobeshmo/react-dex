import React from 'react';
import SignUpForm from "./signUpForm/signUpForm";
import Authentication from "../../components/authentication/authentication";

export function SignUp() {
    return (
        <div className="SignUp">
            <Authentication icon="Group_2">
                <SignUpForm/>
            </Authentication>
        </div>
    );
}