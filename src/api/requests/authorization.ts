const API_URL = "http://dev.trainee.dex-it.ru/";

export class AuthService {
    static async onHandleSignIn(login: string, password: string) {
        try {
            return await fetch(API_URL + 'api/Auth/signIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'login': login,
                    'password': password
                })
            }).then(response => response.json()
                .then(data => {
                    if (data.token) {
                        localStorage.setItem('token', data.token);
                        return data
                    }
                })
            )
        } catch (e) {
            console.log(e)
        }
    }

    static async onHandleSignUp(userName: string, login: string, password: string) {
        try {
            return await fetch(API_URL + 'api/Auth/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'userName': userName,
                    'login': login,
                    'password': password
                })
            }).then(response => response.json()
                .then(data => {
                    if (data.token) {
                        localStorage.setItem('token', data.token);
                        return data
                    }
                })
            )
        } catch (e) {
            console.log(e)
        }

    }
}