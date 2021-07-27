import axios from 'axios';
import Cookie from 'js-cookie'
import ApiData from '../dtos/apiData'

const api = axios.create({
    baseURL: 'http://localhost:4000',
})

api.interceptors.response.use(res => {
    if (res.headers['access-token']) {
        const apiData: ApiData = {
            'access-token': res.headers['access-token'],
            client: res.headers.client,
            expiry: res.headers.expiry,
            'token-type': res.headers['token-type'],
            uid: res.headers.uid
        };
        api.defaults.headers = apiData;
        window.sessionStorage.setItem('@api-data', JSON.stringify(apiData));
    }

    return res;
})


api.interceptors.request.use(req => {
    debugger;
    const url = req.url || ""
    if (url !== "/auth/v1/employee/sign_in") {
        const cookieGet = window.sessionStorage.getItem('@api-data') || "{}"
        const apiData: ApiData = JSON.parse(cookieGet)
        req.headers = apiData;
    }

    return req;
}
)

export default api

