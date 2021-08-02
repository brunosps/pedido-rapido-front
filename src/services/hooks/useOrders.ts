import { useQuery } from "react-query"

import api from "../api"

export async function getOrders(search = "", status = [0,1,2]) {
    const { data } = await api.get('/front/v1/orders', {
        "params": {
          "search": {
              "id": search,
              "name": search,
              "table_number": search,
              "status": status,
          },
        }
      })
    return data.orders
}

export function useOrders(search = "", status = [0,1,2]) {
    return (
        useQuery('Orders', () => getOrders(search, status),
            {
                staleTime: 1000 * 10, // 5 seconds
            })
    )
}
