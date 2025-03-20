import {  FETCH_EMPLOYEES_REQUEST, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_FAILURE } from '../actions/actionFetch';

interface EmployeeState {
    data: [];
    loading: boolean;
    error: string | null;
}

const initialState: EmployeeState = {
    data: [],
    loading: false,
    error: null,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const employeeReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case FETCH_EMPLOYEES_REQUEST: 
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_EMPLOYEES_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case FETCH_EMPLOYEES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default: 
            return state;
    }
};

export default employeeReducer;