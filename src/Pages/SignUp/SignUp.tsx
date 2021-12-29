import React from 'react';
import SignUpForm from "./SignUpForm/SignUpForm";
import Authentication from "../../Components/Authentication/Authentication";

function SignUp() {
    return (
        <div className="SignUp">
            <Authentication icon="Group_2">
                <SignUpForm/>
            </Authentication>
        </div>
    );
}

export default SignUp;