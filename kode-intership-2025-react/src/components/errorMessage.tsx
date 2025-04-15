import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import FlyingSaucer from "../assets/flying-saucer.png";
import { clearError } from "../store/slices/employeesSlice/employeesSlice";

const ErrorDiv = styled.div`
    max-width: 350px;
    padding-top: 5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function ErrorMessage() {
    const dispatch = useDispatch();
    const error = useSelector((state) => state.employees)
      
    if(error) {
        return (
            <ErrorDiv>
              <img style={{width: '56px', height: '56px'}}  src={FlyingSaucer} alt="pict" />  
              <h3>Какой-то сверхразум все сломал</h3>
              <div style={{color: '#97979B'}}>Постараемся быстро починить</div>
              <div>
                <button style={{color: '#6534FF'}} onClick={() => dispatch(clearError())}>
                    Попробовать снова
                </button>
              </div>
            </ErrorDiv>
        )
    }

}

export default ErrorMessage;