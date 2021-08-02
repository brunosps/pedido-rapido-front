import api from './api';

const GetProductsService = async (search) => {
    return api.get<any>(`/front/v1/products?search[name]=${search}`);
}

export default GetProductsService;