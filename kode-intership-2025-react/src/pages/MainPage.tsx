import styled from "styled-components";
import TopAppBar from "../components/topAppBar/topAppBar";
import { useEffect, useState } from "react";
// import { fetchEmployees } from '../api/fetchEmployees';
import List from "../components/employeeList";
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from "../store/slices/employeesSlice/thunks/fetchEmployees";


const Container = styled.section`
    width: 1280px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 1); 
`;

function MainPage() {
    // const[allDepartments, setAllDepartments] = useState<[]>([])

    const dispatch = useDispatch();
    // const employees = useSelector((state) => state.employees.data);
    const tabFilter = useSelector((state) => state.employees.tabFilter);

    useEffect(() => {
        // const fetchData = async () => {
        //     const data = await fetchEmployees();
        //     const fetchedEmployees = data.items;
        //     setEmployees(fetchedEmployees);

        //     const allDepartmentsMass = [];

        //     fetchedEmployees.forEach((employee) => {
        //         if (allDepartmentsMass.length && allDepartmentsMass.find(department => department === employee.department) ) {
        //             return;
        //         } else {
        //             allDepartmentsMass.push(employee.department)
        //         }
        //     })
            
        //     setAllDepartments(allDepartmentsMass);
             
        //     localStorage.setItem('EmployeesList', JSON.stringify(data.items));
        // }
        // fetchData()

        
        if (tabFilter) {
            dispatch(fetchEmployees(tabFilter))
            
        }
        
    }, [dispatch, tabFilter])
       
    return (
        <Container>
            <TopAppBar />
            <List />
        </Container>
    );
}

export default MainPage;



