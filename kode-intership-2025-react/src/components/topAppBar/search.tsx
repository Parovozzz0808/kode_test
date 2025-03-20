// import React from "react";
import styled from "styled-components";
import SearchButton from "../../assets/search.svg";
import Sort from "./sort";

 const Title = styled.h1`
    padding-left: 24px;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    font-style: normal;
 `;

 const SearchField = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 98%;
    padding: 8px 12px;
    margin: 0 16px;
    border-radius: 40px;
    border: 1px solid transparent;
    background: rgba(247, 247, 248, 1);     
 `

 const Button = styled.button`
    /* padding-left: 16px; */
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
    return (
        <div>
            <Title>Поиск</Title>
            <SearchField>
                <Button>
                    <img src={SearchButton}/>
                </Button>
                <Input placeholder="Введите имя, тег, почту..." type="text" />
                <Sort/>
            </SearchField>
        </div>
    )
 }

 export default Search;