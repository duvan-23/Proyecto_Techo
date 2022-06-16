import styled from 'styled-components'


export const CarrouselContainer = styled.div`
    width:100%;
    position:relative;
    
    

`

export const CarrouselImg = styled.img`
    margin-top:70px;
    width:100%;
    height:300px;
    opacity:0;
    transition:1s;
    &.loaded{
        opacity:1;
}
@media screen and (min-width:900px){
    height:500px;
}
`

export const CarrouselButton=styled.div`
    font-size: 30px;
    width: 70px;
    height: 70px;
    line-height: 70px;
    border-radius:50% ;
    background-color:#0093dd73;
    text-align: center;
    font-weight: bold;
    position: absolute;
    z-index:1;
    color: azure;
    margin-top:165px;
    box-shadow: o o 10px rgba(255,255,255,.6);
    -webkit-transition: all .3s ease;
    -o-transition:all .3s ease ;
    transition: all .3s ease;
    &:hover{
        cursor:pointer;
        transform:scale(1.2,1.2)
    }
    @media screen and (min-width:900px){
        margin-top:250px;
    }
`
