import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeTabFilter } from "../../store/slices/employeesSlice/employeesSlice";


const TabsGroup = styled.div`
    margin-left: 5px;
`;

const Button = styled.button`
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 0;
    color: ${(props) => props.$isActive ? 'rgba(5, 5, 16, 1)' : 'rgba(151, 151, 155, 1)'} ;

    &:active {
        color: rgba(5, 5, 16, 1);
        border-bottom: 2px solid rgba(101, 52, 255, 1);
    }
`;

enum IDepartments {
    android = "Android",
    ios = "iOS",
    design = "Дизайн",
    management = "Менеджмент",
    qa = "QA",
    back_office = "Бэк-офис",
    frontend = "Frontend",
    hr = "HR",
    pr = "PR",
    backend = "Backend",
    support = "Техподдержка",
    analytics = "Аналитика",
}

function Tabs() {
    const dispatch = useDispatch();
    const allDepartments = useSelector((state) => state.employees.departments);
    const activeTabFilter = useSelector((state) => state.employees.tabFilter);


    const onTabClick = (tabFilter) => {
        dispatch(changeTabFilter(tabFilter))
    }

    return (
        <TabsGroup>
            {!!allDepartments.length &&
            <>
                <Button onClick={() => onTabClick('all')}>All</Button>

                {allDepartments.map((department: IDepartments, index) => {
                    return <Button $isActive={department === activeTabFilter} onClick={() => onTabClick(department)} key={index}>{IDepartments[department]}</Button>
                })}  
            </>}
           
        </TabsGroup>
    )
}

export default Tabs