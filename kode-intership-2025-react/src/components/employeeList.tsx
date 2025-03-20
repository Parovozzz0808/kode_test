import { NavLink } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
`;

const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    & img {
       margin-right: 16px;
    }
`

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

interface ListProps {
    employees: Employee[]
}

function employeeList({ employees }: ListProps) {
    
       
    return (
            <List>
                {employees.map((employee: Employee) => (
                    <NavLink key={employee.id} to={`/details/${employee.id}`}>
                        <ListItem>
                            <img style={{borderRadius: '50%'}} src={employee.avatarUrl} alt="/"/>
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

export default employeeList;