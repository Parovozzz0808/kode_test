import { combineReducers } from 'redux';
import employeeReducer from '../store/reducers/employeeReducer';


const rootReducer = combineReducers({
    employees: employeeReducer,
});

export default rootReducer;