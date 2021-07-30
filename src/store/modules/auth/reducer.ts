import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Employee from '../../../dtos/Employee';
import ApiData from '../../../dtos/ApiData';

type State = {
    loggedEmployee: Employee;
    apiData: ApiData;
}

const authSlice = createSlice({
    name: 'auth',
    initialState: { loggedEmployee: null, apiData: null } as State,
    reducers: {
        setLoggedEmployee(state, action: PayloadAction<Employee>) {
            state.loggedEmployee = action.payload; 
        },
        clearLoggedEmployee(state) {
            state.loggedEmployee = null;
        },
        setApiData(state, action: PayloadAction<ApiData>) {
            state.apiData = action.payload; 
        },
        clearApiData(state) {
            state.apiData = null;
        }
    }
})

export const { setLoggedEmployee, clearLoggedEmployee, setApiData, clearApiData } = authSlice.actions;
export default authSlice.reducer;