import React from 'react';
import {Authentication} from "../../components/authentication/authentication";
import {SignUpForm} from "./signUpForm/signUpForm";
import {Group2} from "../../assets/icons/icons";

export function SignUp() {
    return (
        <React.Fragment>
            <Authentication icon={<Group2/>}>
                <SignUpForm/>
            </Authentication>
        </React.Fragment>
    );
}