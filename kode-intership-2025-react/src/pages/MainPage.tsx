import styled from "styled-components";
import TopAppBar from "../components/topAppBar/topAppBar";
import { useEffect, useState } from "react";
import { fetchEmployees } from '../api/fetchEmployees';
import List from "../components/employeeList";


const Container = styled.section`
    width: 1280px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 1); 
`;

function MainPage() {
    const[employees, setEmployees] = useState<[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchEmployees();
            setEmployees(data.items);
            localStorage.setItem('EmployeesList', JSON.stringify(data.items));
        }
        fetchData()
    }, [setEmployees])
       
    return (
        <Container>
            <TopAppBar/>
            <List employees= {employees}/>
        </Container>
    );
}

export default MainPage;



