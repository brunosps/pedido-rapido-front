
import axios from 'axios';
import ApiData from '../dtos/ApiData'
import { getCredential, setCredential } from './credentials';


const api = axios.create({
    baseURL: 'http://127.0.0.1:4000',
})

const SaveCredential = (headers: any) => {
    if (headers['access-token']) {
        const apiData: ApiData = {
            'access-token': headers['access-token'],
            client: headers.client,
            expiry: headers.expiry,
            'token-type': headers['token-type'],
            uid: headers.uid
        };
        api.defaults.headers = apiData;
        setCredential(apiData);
    }
}

api.interceptors.response.use(res => {
    SaveCredential(res.headers);
    return res;
}, error => {    
    SaveCredential(error.response.headers);
    if (error.response.status === 401 && window.location.pathname !== "/Auth/Login") {
        return window.location.href = '/Auth/Logout'
    }
    return error;
})


api.interceptors.request.use(req => {
    const url = req.url || ""
    if (url !== "/auth/v1/employee/sign_in") {
        req.headers = getCredential();
    }

    return req;
}
)

export default api

