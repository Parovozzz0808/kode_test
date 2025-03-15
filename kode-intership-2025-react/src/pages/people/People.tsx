// import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import TopAppBar from "../../components/topAppBar/topAppBar";

const Container = styled.section`
    width: 1280px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 1); 
`;


function People() {
    return (
        <Container>
            <TopAppBar/>
                <NavLink to="details">
                    Alice
                </NavLink>

        </Container>
    );
}

export default People;



