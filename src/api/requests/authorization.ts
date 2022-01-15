const API_URL = "http://dev.trainee.dex-it.ru/";

export class AuthService {
    static async onHandleSignIn(login: string, password: string) {
        return await fetch(API_URL + 'api/Auth/signIn', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'login': login,
                'password': password
            })
        }).then(response =>
            response.json().then(data => ({
                data: data,
                status: response.status
            })).then(res => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    return res.data
                }
            })
        )
    }

    static async onHandleSignUp(userName: string, login: string, password: string) {
        return await fetch(API_URL + 'api/Auth/signUp', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'userName': userName,
                'login': login,
                'password': password
            })
        }).then(response =>
            response.json().then(data => ({
                data: data,
                status: response.status
            })).then(res => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    return res.data
                }
            })
        )
    }
}