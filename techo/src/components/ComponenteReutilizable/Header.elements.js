import styled from "styled-components";

export const HeaderHeader = styled.div`
    position: relative;
    display: inline-block;
    text-align: center;
    width: 100%;
    cursor:pointer;

    
    
`
export const HeaderImg = styled.img`
  width: 100%;
  height: 600px;
  @media screen and (max-width:900px){
    height: 400px;
  }

`
export const HeaderTitle = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size:150px;
text-align:center;
color:white;
@media screen and (max-width:900px){
  font-size:90px;
}
`