import HTTP from "../../axios/instanceAxios";
import {AxiosResponse} from "axios";
import {ISignIn, ISignUp} from "../dto/IAuthorization";

export class AuthService {
    static async onHandleSignIn(login: string, password: string) : Promise<AxiosResponse<ISignIn>> {
        return HTTP.post<ISignIn>('api/Auth/signIn', {
            login: login,
            password: password
        })
    }

    static async onHandleSignUp(userName: string, login: string, password: string) : Promise<AxiosResponse<ISignUp>>  {
        return HTTP.post<ISignUp>('api/Auth/signUp', {
            userName: userName,
            login: login,
            password: password
        })
    }
}