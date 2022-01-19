import React from 'react';
import SignUpForm from "./signUpForm/signUpForm";
import Authentication from "../../components/authentication/authentication";

export function SignUp() {
    return (
        <React.Fragment>
            <Authentication icon="Group_2">
                <SignUpForm/>
            </Authentication>
        </React.Fragment>
    );
}