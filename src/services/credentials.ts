import ApiData from '../dtos/ApiData'
import { setApiData } from '../store/modules/auth/reducer';

export function getCredential(): ApiData {
    const storageData = window.sessionStorage.getItem('@api-data') || "{}"
    const apiData: ApiData = JSON.parse(storageData)
    return (apiData);
}

export function setCredential(apiData: ApiData): void {
    setApiData(apiData);
    window.sessionStorage.setItem('@api-data', JSON.stringify(apiData));
}