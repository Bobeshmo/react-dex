import React from "react";
import {SignIn} from "../pages/signIn/signIn";
import {SignUp} from "../pages/signUp/signUp";
import {NoMatch} from "../pages/noMatch/noMatch";
import {Teams} from "../pages/teams/teams";
import {Players} from "../pages/players/players";

export interface IRouter {
    path: string;
    element: React.ComponentType;
}

export const publicRoutes: IRouter[] = [
    {
        path: "/login",
        element: SignIn
    },
    {
        path: "/register",
        element: SignUp
    },
    {
        path: "*",
        element: NoMatch
    }
]

export const privateRoutes: IRouter[] = [
    {
        path: "/teams",
        element: Teams
    },
    {
        path: "/players",
        element: Players
    }
]