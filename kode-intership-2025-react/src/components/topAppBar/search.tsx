import styled from "styled-components";
import Sort from "./sort";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setFilteredEmployees } from "../../store/slices/employeesSlice/employeesSlice";

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


 const Title = styled.h1`
    padding-left: 24px;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    font-style: normal;
 `;

const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 98%;
    padding: 8px 12px;
    margin: 0 16px;
    border-radius: 40px;
    border: 1px solid transparent;
    background: rgba(247, 247, 248, 1);     
`;

 const SearchField = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    &:focus-within {
        svg path {
            fill: #050510;
        }
    }
 `

 const Input = styled.input`
    background-color: transparent;
    border: none;

    &::placeholder {
        color: rgba(195, 195, 198, 1);
    }
    &:focus {
        outline: none;
    }
 `

 function Search() {
    const dispatch = useDispatch();
    const allEmployees = useSelector((state) => state.employees.data);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);         
    };

    useEffect(() => {
        if (allEmployees) {
            const filtered = allEmployees.filter((employee: Employee) => {
                return (
                    employee.firstName.toLowerCase().includes(searchTerm) ||
                    employee.firstName.toLowerCase().includes(searchTerm) ||
                    employee.lastName.toLowerCase().includes(searchTerm) ||
                    employee.userTag.toLowerCase().includes(searchTerm) ||
                    employee.department.toLowerCase().includes(searchTerm) ||
                    employee.position.toLowerCase().includes(searchTerm) ||
                    employee.phone.toLowerCase().includes(searchTerm) ||
                    employee.birthday.toLowerCase().includes(searchTerm)
                );
            });
            
            dispatch(setFilteredEmployees(filtered));
        }
    }, [searchTerm, allEmployees, dispatch]);
    
    
    return (
        <div>
            <Title>Поиск</Title>
            <InputGroup>
                <SearchField>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.94733 18.6997 5.81281 16.9855 4.27667C15.2714 2.74053 13.0338 1.91954 10.7329 1.9825C8.43207 2.04546 6.24275 2.98759 4.61517 4.61517C2.98759 6.24275 2.04546 8.43207 1.9825 10.7329C1.91954 13.0338 2.74053 15.2714 4.27667 16.9855C5.81281 18.6997 7.94733 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7738 20.4936 21.8482 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5065 21.8482 21.6171 21.7738 21.71 21.68C21.8903 21.4936 21.991 21.2444 21.991 20.985C21.991 20.7257 21.8903 20.4765 21.71 20.29ZM11 18C9.61556 18 8.26218 17.5895 7.11103 16.8203C5.95989 16.0511 5.06268 14.9579 4.53287 13.6788C4.00306 12.3997 3.86443 10.9923 4.13453 9.63439C4.40463 8.27653 5.07131 7.02925 6.05028 6.05028C7.02925 5.07131 8.27653 4.40463 9.63439 4.13453C10.9923 3.86443 12.3997 4.00306 13.6788 4.53287C14.9579 5.06268 16.0511 5.95989 16.8203 7.11103C17.5895 8.26218 18 9.61556 18 11C18 12.8565 17.2625 14.637 15.9498 15.9498C14.637 17.2625 12.8565 18 11 18Z" fill="#C3C3C6"/>
                        </svg>
                    </button>
                    <Input 
                        placeholder="Введите имя, тег, почту..." 
                        type="text"
                        value={searchTerm} 
                        onChange={handleSearch}
                    />
                </SearchField>
                <Sort/>
            </InputGroup>
        </div>
    )
 }

 export default Search;