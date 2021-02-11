import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 100%;
    margin: auto;
    padding: 5%;

    @media(min-width: 720px) {
        max-width: 75%;
        margin: auto;
        padding: 10px;
    }
`; 
export const Header = styled.h1`
    padding-bottom: 20px;
    padding-top: 20px;
    font-size: 45px;
    line-height: 40px;
    color: #272343;
`; 

export const List = styled.div`
     display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 16px;
`; 
export const Item = styled.h2`
    font-size: 20px;
    font-weight: 600;
    padding: 8px;
`; 