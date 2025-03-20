import { NavLink } from "react-router-dom";
import styled from "styled-components";

// interface Employee {
//     id: string,
//     avatarUrl: string,
//     firstName: string,
//     lastName: string,
//     userTag: string,
//     department: string,
//     position: string,
//     birthday: string,
//     phone: string
// }

const Card = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;




function DetailsCard() {
    const data = localStorage.getItem('EmployeesList');
    const employees = JSON.parse(data)
    const url = window.location.href
    const userId = url.slice(30);

    
    
    

    return (
        <>
            <NavLink to="/">
                Back
            </NavLink>
            <Card key={0}>
                <img src={'/'} alt=""/>
                <h1>Алиса Иванова</h1>
                <p>Designer</p>
                <p>5 июня 1996</p>
                <p>+7(999)900 90 90</p>
            </Card>
        </>
    )
}

export default DetailsCard;