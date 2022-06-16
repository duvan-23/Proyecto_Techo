import styled from 'styled-components'

export const ContainerCard = styled.div`
    cursor:pointer;
    @media screen and (min-width:900px){
        width:80%;
        margin:auto;
    }
`

export const Cards = styled.div`
    display:grid;
    padding: 20px;
    grid-gap: 10px;
    grid-template-rows: 0.5fr 1fr;
    @media screen and (min-width:900px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: none;      
    }
    
    `
    export const DivGrid = styled.div`
    
    `
    export const DivGrid2 = styled.div`
    border-radius: 15px;
    transition:1s all ease;
    -webkit-box-shadow: 10px 10px 14px -10px rgba(161,156,161,0.99);
    -moz-box-shadow: 10px 10px 14px -10px rgba(161,156,161,0.99);
    box-shadow: 10px 10px 14px -10px rgba(161,156,161,0.99);
    &:hover{
        background-color:  #E6F3F3;

    }
    @media screen and (min-width:900px){
        width:100%;
        height:100%;
    }
    
    `
    
    export const ImgCard = styled.img`
    width:100%;
    height:300px;
    border-radius: 10px;
    @media screen and (min-width:900px){
        width:100%;
        height:100%;
    }
    
    `
    
    export const TitleCard=styled.h2`
    border-bottom: 6px solid #EA6D4F;
    border-top: 6px solid #EA6D4F;
    padding: 20px;
    text-align: center;
    font-size:xxx-large;
    font-weight: 600;
    
    color:#0092dd;
    margin-bottom:15px;
    transition:1s all ease;
    &:hover{
        color:white;
        background-color:  #0092dd;
    }
    @media screen and (min-width:900px){
        border-radius:0px 10px 0 0 ;
        font-size:70px;
        padding: 10px;
        font-weight: 600;
        
    }
    
    `
    
    export const TextCard = styled.p`
    font-size: 1.3em;
    color:#333333;
    border-radius: 10px;
    padding:.7em;
    text-align:center;
    `
    
    export const SpanCard = styled.span`
    font-size: larger;
    font-weight: 400;
    padding:.7em;
`