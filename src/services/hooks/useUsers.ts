import { useQuery } from "react-query"
import employee from "../../components/dtos/employee"
import api from "../api"



export async function getEmployees() {
    const { data } = await api.get('/admin/v1/employees')

    const employees = data.employees.map((employee: employee) => {
        return {
            id: employee.id,
            name: employee.name,
            email: employee.email,
            occupation: employee.occupation,
        }
    })

    return employees
}

export function useUsers() {
    return (
        useQuery('Employees', getEmployees,
            {
                staleTime: 1000 * 5, // 5 seconds
            })
    )
}
