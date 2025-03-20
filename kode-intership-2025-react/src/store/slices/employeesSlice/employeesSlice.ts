import { createSlice } from '@reduxjs/toolkit';
import { fetchEmployees } from './thunks/fetchEmployees';

const initialState = {
  data: [],
  isLoading: false,
  error: '',
  tabFilter: 'all',
  departments: [],
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    changeTabFilter: (state, action) => {
      state.tabFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Обработка состояния "загрузка"
      .addCase(fetchEmployees.pending, (state) => {
        state.isLoading = true;
      })
      // Обработка успешного завершения запроса
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        console.log(111);
        
        const fetchedEmployees = action.payload?.items;
        state.isLoading = false;
        state.data = fetchedEmployees;

        if (!state.departments.length) {
          const allDepartmentsMass = [];
        
          fetchedEmployees.forEach((employee) => {
              if (allDepartmentsMass.length && allDepartmentsMass.find(department => department === employee.department) ) {
                  return;
              } else {
                  allDepartmentsMass.push(employee.department)
              }
          })
          state.departments = allDepartmentsMass;
        }
      })

      // Обработка ошибки
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { changeTabFilter } = employeesSlice.actions;
// Экспортируем редюсер
export default employeesSlice.reducer;