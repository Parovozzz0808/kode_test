import styled from "styled-components";

const TabsGroup = styled.div`
    margin-left: 5px;
`;

const Button = styled.button`
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 0;
    color: rgba(151, 151, 155, 1);

    &:active {
        color: rgba(5, 5, 16, 1);
        border-bottom: 2px solid rgba(101, 52, 255, 1);
    }
`;

function Tabs() {
    return (
        <TabsGroup>
            <Button>Все</Button>
            <Button>Designers</Button>
            <Button>Analysts</Button>
            <Button>Managers</Button>
            <Button>iOS</Button>
            <Button>Android</Button>    
        </TabsGroup>
    )
}

export default Tabs