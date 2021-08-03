import { createContext, ReactNode, useState } from "react";
import api from "../services/api";
import { useRouter } from 'next/router';
import Employee from "../dtos/Employee";
import { useDispatch } from "react-redux";
import { setLoggedEmployee } from "../store/modules/auth/reducer";

type SignInCredentials = {
    email: string
    password: string
}

type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<void>,
}

type AuthProviderProps = {
    children: ReactNode,
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    const router = useRouter();
    const dispatch = useDispatch();
    async function signIn({ email, password }: SignInCredentials) {
        try {
            const auth = await api.post('/auth/v1/employee/sign_in', {
                email,
                password,
            })

            const employee = auth.data.data;

            dispatch(setLoggedEmployee(employee));

            if (router.query.callback && router.query.callback !== "/" && router.query.callback !== "/Auth/Logout") {
                router.push(decodeURIComponent(router.query.callback.toString()));
            } else {
                // router.push(employee.occupation === 'admin' ? '/Admin' : '/')
                router.push('/')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    )
}
