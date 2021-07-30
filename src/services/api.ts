import axios from 'axios';
import ApiData from '../dtos/ApiData'
import { getCredential, setCredential } from './credentials';
const api = axios.create({
    baseURL: 'http://127.0.0.1:4000',
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
        setCredential(apiData);
    }

    return res;
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