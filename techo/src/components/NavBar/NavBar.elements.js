import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    height:70px;
    background: #0092dd;
    position:fixed;
    z-index:2;
    @media screen and (max-width:960px){
        

    }
`;


export const Wrapper= styled.div`
    whidth:100%;
    
    height:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    
`;

export const LogoContainer = styled.div`
    margin-left:0.5rem;
    display:flex;
    align-items:center;
    font-size:1.2rem;
    margin-right: 5px;

   p{
       &:nth-child(2){
           color:white;
           font-weight:500;
           font-size:1.3rem;
           
       }
   }
`;

export const Menu = styled.ul`
    heigth:100%;
    display:flex;
    justify-content: flex-end;
    list-style:none;
    z-index:2;
    
    
    @media screen and (max-width:960px){
        background: #0092dd;
        position:absolute;
        top:70px;
        left:${({open})=>(open?"0":"-100%")};
        width:100%;
        heigth:90vh;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        transition:0.9s all ease;
        position:fixed;
    }
`; 

export const MenuItem = styled.li`
    heigth:100%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    height:100%;
    padding:0.5rem 2.5rem;
    font-size:1.2rem;
    font-weight:700;
    cursor:pointer;
    color:white;
    transition:0.4s ;
    

    &:hover{
        border-bottom: 4px solid #EA6D4F;
        color: rgba(195, 224, 250, 0.925);
    }

    @media screen and (max-width:960px){
        width:100%;
        heigth:70px;
        display:flex;
        border-bottom:none;
        align-items:center;
        &:hover{
            border-bottom: none;
            color: rgba(195, 224, 250, 0.925);
        }
    }
`;


export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width:960px){
        display:flex;
        align-items:center;
        
        svg{
            
            fill:white;
            margin-rigth:0.5rem;
            
        }
    }
`;


