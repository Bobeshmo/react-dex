import React from 'react';
import SignInForm from "./SingInForm/SignInForm";
import Authentication from "../../Components/Authentication/Authentication";

function SignIn() {
    return (
        <div className="SignIn">
            <Authentication icon="Group">
                <SignInForm/>
            </Authentication>
        </div>
    );
}

export default SignIn;