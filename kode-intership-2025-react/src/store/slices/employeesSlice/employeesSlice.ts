import { createSlice } from '@reduxjs/toolkit';
import { fetchEmployees } from './thunks/fetchEmployees';

const initialState = {
  data: [],
  filteredData: null,
  isLoading: false,
  error: null,
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
    setFilteredEmployees: (state, action) => {
      state.filteredData = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Обработка состояния "загрузка"
      .addCase(fetchEmployees.pending, (state) => {
        state.isLoading = true;
      })
      // Обработка успешного завершения запроса
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        
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
        state.error = action.payload as { status: number, message: string };
      });
  },
});
export const { changeTabFilter, setFilteredEmployees, clearError } = employeesSlice.actions;

// Экспортируем редюсер
export default employeesSlice.reducer;