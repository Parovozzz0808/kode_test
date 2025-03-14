// import React from "react";
import styled from "styled-components";
import SearchButton from "../../assets/search.svg";
import Sort from "./sort";

 const Title = styled.h1`
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
    border-radius: 16px;
    border: 1px solid transparent;
    background: rgba(247, 247, 248, 1);     
 `

 function Search() {
    return (
        <div>
            <Title>Поиск</Title>
            <SearchField>
                <button>
                    <img src={SearchButton}/>
                </button>
                <input placeholder="Введите имя, тег, почту..." type="text" />
                <Sort/>
            </SearchField>
        </div>
    )
 }

 export default Search;