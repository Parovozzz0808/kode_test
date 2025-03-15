import styled from "styled-components";
import SortButton from "../../assets/sort.svg";
// import SortActiveButton from "../../assets/sortActive.svg";

const Button = styled.button`
    margin-left: 60rem;
`;

function Sort() {
    return (
        <>
            <Button>
                <img src={SortButton} alt="" />
            </Button>
        </>
    )
}

export default Sort
