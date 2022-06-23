import styled from "styled-components";


export const SectionArea=styled.section`
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    padding: 20px;
    max-width: 1300px;`
export const SectionContainerArea=styled.div`
    display: grid;
    height: 550px;
    
    grid-template-areas: 
    "proyecto-1 proyecto-1 proyecto-2 proyecto-3"
    "proyecto-1 proyecto-1 proyecto4 proyecto-6";
    gap: 10px;
    @media screen and (max-width:900px){
        grid-template-areas: 
        "proyecto-1  proyecto-2 proyecto-3"
        "proyecto-1  proyecto4 proyecto-6";
    }`


export const SectionAreaItems=styled.article`
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &:hover{
        transform: translate(0%);
    } 
    &:nth-of-type(1){
        grid-area: proyecto-1;
    }
    &:nth-of-type(2){
        grid-area: proyecto-2;
    }
    &:nth-of-type(3){
        grid-area: proyecto-3;
    }
    &:nth-of-type(4){
        grid-area: proyecto4;
    }
    &:nth-of-type(5){
        grid-area: proyecto-6;
    }`
export const SectionImg=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
`
export const SectionAreaSubtilte=styled.h2`

@media screen and (max-width:900px){
    font-size:17px ;
}
`
export const SectionHoverSubtilte=styled.div`
    font-weight: 600;
    position: absolute;
    background: #0093dd80;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: whitesmoke;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
    cursor: pointer;
    transition: transform .7s ease-in-out;
    &:hover{    
        transform: translate(100%);
        transform: translate(100%);
        
    }
    
`

