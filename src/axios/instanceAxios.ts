import axios from 'axios'

const HTTP = axios.create({baseURL: "http://dev.trainee.dex-it.ru/"})

export default HTTP