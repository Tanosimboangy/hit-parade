import styled from 'styled-components';

export const Container = styled.form`
    max-width: 60%;
    margin: auto;
    border-radius: 16px;
    padding: 20px 30px;
    background-color: white;
    box-shadow: 1px 1px 5px black;
    display: flex;
    flex-direction: column;
    font-size: 20px;
`; 
export const Header = styled.h2`
    padding-bottom: 10px;
`; 
export const Input = styled.input`
    border: 1px solid gray;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    margin-bottom: 10px;
    outline: none;
    cursor: pointer;

    :hover {
        box-shadow: 1px 1px 5px blue;
    } 
`; 
export const Select = styled.select`
    border: 1px solid gray;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    margin-bottom: 10px;
    outline: none;
    cursor: pointer;

    :hover {
        box-shadow: 1px 1px 5px blue;
    } 
`; 
export const Textarea = styled.textarea`
    border: 1px solid gray;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    margin-bottom: 10px;
    outline: none;
    cursor: pointer;

    :hover {
        box-shadow: 1px 1px 5px blue;
    } 
`; 
export const Button = styled.button`
    background-color: white;
    color: black;
    font-weight: 700;
    border: 1px solid black;
    box-shadow: 1px 1px 5px blue;
    border-radius: 8px;
    padding: 10px 30px;
    font-size: 16px;
    outline: none;
    border: none;
    
    :hover {
        background-color: green;
        color: yellow;
    }
`; 

// margin-bottom: 10px;
// outline: none;
// cursor: pointer;
// border-radius: 4px;