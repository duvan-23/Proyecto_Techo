import styled from 'styled-components'

export const TitleMainPage =styled.h1`
    background-color: #CCE0E3;
    color: #333333;
    padding:40px;
    font-size: 40px;
    text-align: center;
    transition:0.5s all ease;
    margin-top:20px;
    margin-bottom:60px;
    cursor:pointer;

    &:hover{
        color:#EA6D4F;
    }
    @media screen and (min-width:900px){
        padding:60px;
        font-size: 70px;
    }
`
export const ContainerMainPage=styled.div`
    width:30%;
    margin:auto;
    margin-bottom: 40px;
    @media screen and (max-width:900px){
        width:70%;
    }

`

export const ContainerMarca=styled.div`
    border: .1px solid  #d6d3d3;
    background:#E6F3F3;
    margin-top:50px;
    border-radius:10px;
    max-width:490px;
    -webkit-box-shadow: 10px 10px 14px -10px rgba(161,156,161,0.99);
    -moz-box-shadow: 10px 10px 14px -10px rgba(161,156,161,0.99);
    box-shadow: 10px 10px 14px -10px rgba(161,156,161,0.99);


`
export const Phrase = styled.h2`
    border-top:3px solid #EA6D4F;
    width:80%;
    text-align: center;
    margin:auto;
    color: #333333;
    font-weight: 100;
    padding:5px;
`
export const LogoMainPage = styled.img`
    width:100%;
    
    
`