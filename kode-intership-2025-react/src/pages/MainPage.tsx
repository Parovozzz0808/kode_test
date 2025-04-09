import styled from "styled-components";
import TopAppBar from "../components/topAppBar/topAppBar";
import { useEffect } from "react";
import List from "../components/employeeList";
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from "../store/slices/employeesSlice/thunks/fetchEmployees";


const Container = styled.section`
    width: 1280px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 1); 
`;

function MainPage() {
    const dispatch = useDispatch();
    const tabFilter = useSelector((state) => state.employees.tabFilter);

    useEffect(() => {
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



