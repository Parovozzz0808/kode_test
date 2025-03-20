import Search from "./search";
import styled from "styled-components";
import Tabs from "./tabs";


const Container = styled.div`
    width: 100%;
    margin-bottom: 16px;
    border-bottom: 1px solid rgba(195, 195, 198, 1);
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