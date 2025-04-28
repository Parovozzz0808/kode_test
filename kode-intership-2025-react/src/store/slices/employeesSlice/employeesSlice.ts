import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEmployees } from './thunks/fetchEmployees';

const initialState = {
  data: [],
  filteredData: [],
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
    sortEmployees: (state, action: PayloadAction<'birthday' | 'alphabet'>) => {
      const sortBy = action.payload;
      const employees = state.filteredData || state.data;

      if(sortBy === 'alphabet') {
        employees.sort((a, b) =>  
          a.firstName.localeCompare(b.firstName)
        );
      } else if (sortBy === 'birthday') {
        employees.sort((a, b) => {
          const dateA = new Date(a.birthday);
          const dateB = new Date(b.birthday);

          return (dateA.getMonth() - dateB.getMonth()) ||
                  (dateA.getDate() - dateB.getDate());
        });
      }

      if(state.filteredData) {
        state.filteredData = [...employees];
      } else {
        state.data = [...employees];
      }
    },
    clearSort: (state) => {
      if (state.filteredData) {
        state.filteredData = [...state.data];
      } else {
        state.data = [...state.data];
      }
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
export const { changeTabFilter, setFilteredEmployees, sortEmployees, clearSort, clearError } = employeesSlice.actions;

// Экспортируем редюсер
export default employeesSlice.reducer;