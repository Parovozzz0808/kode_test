import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ErrorMessage from "./errorMessage";

const List = styled.ul`
`;

const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    & img {
       margin-right: 16px;
    }
`;

interface Employee {
    id: string,
    avatarUrl: string,
    firstName: string,
    lastName: string,
    userTag: string,
    department: string,
    position: string,
    birthday: string,
    phone: string
}


function EmployeeList() {
    const { data, filteredData, error, isLoading } = useSelector((state) => state.employees);
    const employees = filteredData || data;

    if(isLoading) {
        return (
            <div>Загрузка...</div>
        )
    }

    if(error) {
        console.log(error);
        
        return (
            <>
                <ErrorMessage/>
            </>
        )
    }
       
    return (
            <List>
                {!!employees.length && employees.map((employee: Employee) => (
                    <NavLink key={employee.id} to={`/details/${employee.id}`}>
                        <ListItem>
                            <img style={{borderRadius: '50%'}} src={employee.avatarUrl} alt="img"/>
                            <div>
                                <h3>{employee.firstName} {employee.lastName}</h3>
                                <p>{employee.department}</p>
                            </div>
                        </ListItem>
                    </NavLink>
                ))}
            </List>  
    );
}

export default EmployeeList;