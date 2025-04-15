import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Используем axios для запросов

// Создаем асинхронный thunk для получения данных
export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async (tabFilter) => {
    const API_MAIN_URL = `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${tabFilter}`;
    
    const response = await axios.get(API_MAIN_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
  });

// export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async (_, {rejectWithValue} ) => {

//     const API_MAIN_URL = `"https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__code=500"`;
    
//     try {
//         const response = await axios.get(API_MAIN_URL, {
//             method: 'GET',
//             headers: { 'Content-Type': 'application/json' },
//           });
//           if(!response.ok) {           
//             throw { status: response.status, message: response.statusText };            
//           }
//           return response.data.items; 
//     }
//     catch (error) {
//         return rejectWithValue(error)
//     }
//   });