// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './slices/employeesSlice/employeesSlice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});