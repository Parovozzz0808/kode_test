import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import calculateAge from "../utils/calculateAge";

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

const Card = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;




function DetailsCard() {
    const userId = window.location.pathname.split('/details/')[1];
    const employees = useSelector((state) => state.employees.data);  
    const employee = employees.find((employee: Employee) => (employee.id === userId));
    const birthdayUser = employee.birthday.split('-').reverse().join('-');
    const userAge = calculateAge(employee.birthday);


    return (
        <>
            <NavLink to="/">
                Back
            </NavLink>
            <Card key={employee.id}>
                <img src={employee.avatarUrl} alt="photo"/>
                <h1>{employee.firstName} {employee.lastName}</h1> <p>{employee.userTag}</p>
                <p>{employee.position}</p>
                <p>{birthdayUser}</p>
                <p>{userAge}</p>
                <p>{employee.phone}</p>
            </Card>
        </>
    )
}

export default DetailsCard;