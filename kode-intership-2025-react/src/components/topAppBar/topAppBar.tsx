import Search from "./search";
import styled from "styled-components";
import Tabs from "./tabs";


const Container = styled.div`
    width: 100%;
    margin-bottom: 40px;
`

function TopAppBar() {
    return (
        <Container>
            <Search/>
            <Tabs/> 
        </Container>
    )
}

export default TopAppBar;