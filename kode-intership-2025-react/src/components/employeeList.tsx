import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
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

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonItem = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 12px;
`;

const SkeletonAvatar = styled.div`
    width: 72px;
    height: 72px;
    margin-right: 20px;
    border-radius: 50%;
    background: linear-gradient(#F3F3F6, #FAFAFA);
    animation: ${shimmer} 1.5s infinite linear;
`;

const SkeletonText = styled.div`
    margin-top: 15px;
    flex: 1;
`;

const SkeletonLine = styled.div`
    height: 12px;
    margin-bottom: 8px;
    border-radius: 50px;
    background: linear-gradient(#F3F3F6, #FAFAFA);
    animation: ${shimmer} 1.5s infinite linear;

    &:first-child {
        width: 144px;
        height: 16px;
        margin-bottom: 6px;
    }

    &:last-child {
        width: 80px;
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
            <List>
                {[...Array(10)].map((_, index) => (
                    <SkeletonItem key={index}>
                        <SkeletonAvatar />
                        <SkeletonText>
                            <SkeletonLine />
                            <SkeletonLine />
                        </SkeletonText>
                    </SkeletonItem>
                ))}
            </List>
        )
    }

    if(error) {       
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