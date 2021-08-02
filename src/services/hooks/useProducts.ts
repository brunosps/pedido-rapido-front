import { useQuery } from "react-query"

import api from "../api"

export async function getProducts(searchProducts: any) {
    const { data } = await api.get('/front/v1/products', searchProducts)
    return data.products
}

export function useProducts(search: string = "") {
    
    const searchProducts = { "search": { "name": search } }

    return (
        useQuery('Products', () => getProducts(searchProducts),
            {
                staleTime: 1000 * 30,
            })
    )
}
