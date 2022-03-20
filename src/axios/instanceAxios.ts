import axios from 'axios'

const HTTP = axios.create({baseURL: "http://dev.trainee.dex-it.ru/"})

HTTP.interceptors.response.use(response => response, error => {
    if (error.response.status === 401) {
        window.location.href = "/login"
    }
    return Promise.reject(error)
})

export default HTTP