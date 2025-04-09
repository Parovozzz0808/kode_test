import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import calculateAge from "../utils/calculateAge";
import Arrow from "../assets/arrow.png";
import employeeList from "../components/employeeList";

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
    margin: 0 auto;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
`;

const TopCard = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F7F7F8;
`;

const BottomCard = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`




function DetailsCard() {
    const userId = window.location.pathname.split('/details/')[1];
    const employees = useSelector((state) => state.employees.data);  
    const employee = employees.find((employee: Employee) => (employee.id === userId));
    const birthdayUserFormat = new Date(employee.birthday) 
    const birthdayUser = birthdayUserFormat.toLocaleDateString("ru-Ru", {year: "numeric", month: "long", day: "numeric",})
    const userAge = calculateAge(employee.birthday);


    return (
        <>
            <Card key={employee.id}>
                <TopCard>
                    <NavLink style={{position: 'relative', left: '-48%'}} to="/">
                        <button onClick={() => {employeeList()}}>
                            <img src={Arrow} alt="back" />
                        </button>
                    </NavLink>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img style={{borderRadius: '50%'}} src={employee.avatarUrl} alt="photo"/>
                        <div style={{margin: '24px 0 20px 0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <p style={{fontSize: '24px', fontWeight: '700', color: '#050510'}}>{employee.firstName} {employee.lastName}</p>
                            <p style={{fontSize: '17px', fontWeight: '400', color: '#97979B', marginLeft: '5px'}}>{employee.userTag}</p>
                        </div>
                        <p style={{marginBottom: '32px', fontSize: '13px', fontWeight: '400', color: '#55555C'}}>{employee.position}</p>
                    </div>
                </TopCard>
                <BottomCard>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <p style={{marginBottom: '35px', fontSize: '16px', fontWeight: '500', color: '#050510'}}>{birthdayUser}</p>
                        <p style={{fontSize: '16px', fontWeight: '500', color: '#97979B'}}>{userAge}</p>
                        
                    </div>
                    <p style={{fontSize: '16px', fontWeight: '500', color: '#050510'}}>{employee.phone}</p>
                </BottomCard>
            </Card>
        </>
    )
}

export default DetailsCard;