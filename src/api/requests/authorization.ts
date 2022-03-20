import HTTP from "../../axios/instanceAxios";

export class AuthService {
    static async onHandleSignIn(login: string, password: string) {
        return HTTP.post('api/Auth/signIn', {
            login: login,
            password: password
        }).then(response => {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                return response.data
            }
        }).catch(e => {
            console.log(e)
        })
    }

    static async onHandleSignUp(userName: string, login: string, password: string) {
        return HTTP.post('api/Auth/signUp', {
            userName: userName,
            login: login,
            password: password
        }).then(response => {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                return response.data
            }
        }).catch(e => {
            console.log(e)
        })
    }
}