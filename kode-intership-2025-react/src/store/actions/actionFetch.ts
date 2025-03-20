import { fetchEmployees } from '../../api/fetchEmployees';
import { Dispatch } from 'redux';

export const FETCH_EMPLOYEES_REQUEST = 'FETCH_EMPLOYEES_REQUEST';
export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS';
export const FETCH_EMPLOYEES_FAILURE = 'FETCH_EMPLOYEES_FAILURE';


export const fetchEmployeesRequest = () => ({
  type: FETCH_EMPLOYEES_REQUEST,
});

export const fetchEmployeesSuccess = (data: []) => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: data,
});

export const fetchEmployeesFailure = (error: string) => ({
  type: FETCH_EMPLOYEES_FAILURE,
  payload: error,
});

export const fetchEmployeesThunk = (department?: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchEmployeesRequest());
    try {
      const data = await fetchEmployees(department);
      dispatch(fetchEmployeesSuccess(data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchEmployeesFailure(error.message));
      } else {
        dispatch(fetchEmployeesFailure('An unknown error occurred'));
      }
    }
  };
};