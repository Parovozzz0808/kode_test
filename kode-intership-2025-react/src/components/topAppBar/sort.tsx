import styled from "styled-components";
import SortButton from "../../assets/sort.svg";

const Button = styled.button`
    margin-left: 57rem;
`;

function Sort() {
    return (
        <>
            <Button>
                <img src={SortButton} alt="/" />
            </Button>
        </>
    )
}

export default Sort
