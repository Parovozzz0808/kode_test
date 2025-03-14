import styled from "styled-components";
import SortButton from "../../assets/sort.svg";

const Button = styled.button`
    padding-left: 60rem;
`;

function Sort() {
    return (
        <>
            <Button>
                <img src={SortButton}/>
            </Button>
        </>
    )
}

export default Sort
