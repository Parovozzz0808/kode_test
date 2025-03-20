import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Используем axios для запросов

// Создаем асинхронный thunk для получения данных
export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async (tabFilter) => {
    // const url = department 
    //   ? `${API_MAIN_URL}?__example=${department}` 
    //   : `${API_MAIN_URL}?__example=all`;
    const API_MAIN_URL = `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${tabFilter}`;
    const response = await axios.get(API_MAIN_URL, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
  });