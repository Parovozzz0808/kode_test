import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Alise from '..//../assets/alise.png'; 


const Card = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;




function DetailsCard() {
    return (
        <Card>
            <NavLink to="/">
                Back
            </NavLink>
            <img src={Alise} alt=""/>
            <h1>Алиса Иванова</h1>
            <p>Designer</p>
            <p>5 июня 1996</p>
            <p>+7(999)900 90 90</p>
        </Card>
    )
}

export default DetailsCard;