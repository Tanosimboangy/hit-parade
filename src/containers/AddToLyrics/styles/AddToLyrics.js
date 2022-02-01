import styled from "styled-components";

export const Wrapper = styled.div``; 
export const Artist = styled.h2`    
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    color: #000000;
    margin-bottom: 16px;
`; 
export const Lyrics = styled.div`
    max-width: 400px;
    margin-right: auto;
    padding: 2% 4% 6% 4%;
    background: #272343;
    border-radius: 5px;
    margin-bottom: 20px;
    color: #FFFFFE;
`; 
export const Header = styled.h3`
    margin-bottom: 20px;
    font-size: 30px;
`; 
export const Text = styled.p`
    font-size: 16px;
`; 
export const Button = styled.button`
    display: block;
    text-align: center;
    font-weight: bold;
    color:#fff;
    text-decoration: none;
    background-color: #429000;
    padding:10px 5px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 5px solid #429000;
    box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.15);

    :active{
        position: relative;
        top:3px;
        left:2px;
        box-shadow: 0px 0px;
    }

    :hover{
        background-color: #fff;
        color:#429000;
        font-weight: bold;
    }
`; 