import { useQuery } from "react-query"
import employee from "../../components/dtos/employee"
import api from "../api"

type GetUsersResponse = {
    total_pages: number,
    employees: employee[]
    total: number,
}

export async function getEmployees(page: number): Promise<GetUsersResponse> {
    const { data } = await api.get('/admin/v1/employees', {
        params: {
            page,
        }
    })

    const total_pages = Number(data.meta.total_pages)
    const total = Number(data.meta.total)



    const employees = data.employees.map((employee: employee) => {
        return {
            id: employee.id,
            name: employee.name,
            email: employee.email,
            occupation: employee.occupation,
        }
    })

    return { employees, total_pages, total }
}


export function useUsers(page: number) {
    return (
        useQuery(['Employees', page], () => getEmployees(page),
            {
                staleTime: 1000 * 5, // 5 seconds
            })
    )
}

