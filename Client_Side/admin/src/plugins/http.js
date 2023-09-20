import axios from 'axios';
import router from '../router/index';

const http = axios.create({
    baseURL: 'http://localhost:3000/api'
})

//Request Inerceptor
http.interceptors.request.use(config => {
    if (localStorage.eleToken)
        config.headers.Authorization = localStorage.eleToken
    return config
}, error => {
    return Promise.reject(error)
})

//Response Interceptor
http.interceptors.response.use(response => {

    return response
}, error => {

    const { status } = error.response
    if (status == 401) {
        // Remove Token
        localStorage.removeItem('eleToken')
        router.push('/login')
    }

    return Promise.reject(error)
})

export default http;