import HTTP from "../../axios/instanceAxios";
import {ISignIn, ISignUp} from "../models/IAuthorization";

export class AuthService {
    static async onHandleSignIn(login: string, password: string) {
        return HTTP.post<ISignIn>('api/Auth/signIn', {
            login: login,
            password: password
        }).then(response => {
            localStorage.setItem('token', response.data.token);
            return response.data;
        })
    }

    static async onHandleSignUp(userName: string, login: string, password: string) {
        return HTTP.post<ISignUp>('api/Auth/signUp', {
            userName: userName,
            login: login,
            password: password
        }).then(response => {
            localStorage.setItem('token', response.data.token);
            return response.data;
        })
    }

    static logOut() {
        localStorage.removeItem('token')
        document.location.href = '/login'
    }
}