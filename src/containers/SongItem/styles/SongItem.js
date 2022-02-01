import styled from 'styled-components';

export const Container = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    background: #272343;
    border-radius: 5px;
    padding: 35px;
    margin-bottom: 16px;
    font-size: 20px;

    @media(max-width: 320px) {
        flex-wrap: wrap;
        padding: 30px;
    }
`; 
export const Heart = styled.li`
    img {
        cursor: pointer;
    }
`; 
export const Details = styled.li`
     
`; 
export const Like = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;     
    img {
        cursor: pointer;
    }
`; 
export const Dislike = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
        cursor: pointer;
    }
`; 
export const ShoppingCart = styled.li`
    img {
        cursor: pointer;
    }
`; 
export const Lyrics = styled.li`
    
`; 
