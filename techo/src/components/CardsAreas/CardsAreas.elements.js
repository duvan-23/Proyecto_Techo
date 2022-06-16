import styled from "styled-components";


export const CardAreas = styled.div`
    perspective:1000px;
    height:28vh;
    width:100%;
    cursor: pointer;


    @media screen and (min-width:900px){
    flex-basis:0 0 33.33%;
    max-width:33.33%;
    padding:0 1.5em
    
}
`
export const CardAreasCard = styled.div`
    height:100%;
    width:100%;
    margin-top:0px;
    background-color:  #EA6D4F;
    border-radius:20px;
    overflow:hidden;
    transition:0.6s all ease;
    -webkit-box-shadow: 10px 10px 14px -10px rgba(161,156,161,0.99);
    -moz-box-shadow: 10px 10px 14px -10px rgba(161,156,161,0.99);
    box-shadow: 10px 10px 14px -10px rgba(161,156,161,0.99);
    &:hover{
        background-color:  #0092dd;
        -webkit-box-shadow: 10px 10px 5px 0px rgba(194,183,194,1);
        -moz-box-shadow: 10px 10px 5px 0px rgba(194,183,194,1);
        box-shadow: 10px 10px 5px 0px rgba(194,183,194,1);
    }
`
export const CardAreasFront = styled.div`
    height:100%;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;

`
export const CardAreasContent = styled.div`
`

export const CardAreasTitle= styled.h3`
    font-size:40px;
    font-weight:600;
    letter-spacing:0.04em;
    color:black;
    text-align:center;
    color: #ffffff;

`
