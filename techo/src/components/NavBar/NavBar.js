import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { Container, LogoContainer, Menu, MenuItem, MobileIcon, Wrapper } from './NavBar.elements';
import { IconContext } from 'react-icons/lib';

import techoBlanco from '../../img/techoBlanco.png'
import '../../css/NavBar.css'



export const NavBar = () => {

  const [showMobileMenu , setShowMobileMenu] =useState(false)
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{style:{fontSize:"2em"}}}>

        <LogoContainer>
          <img className='imgTecho' src={techoBlanco} />
          <p className='paragraph'>Intranet TECHO Uruguay</p>
        </LogoContainer>

        <MobileIcon onClick={()=>setShowMobileMenu(!showMobileMenu)}>
          <FaBars/>
        </MobileIcon>

        <Menu open={showMobileMenu}>
          <MenuItem onClick={()=>setShowMobileMenu(!showMobileMenu)}>
            INICiO
          </MenuItem>

          <MenuItem onClick={()=>setShowMobileMenu(!showMobileMenu)}>
            AREAS
          </MenuItem>
          <MenuItem onClick={()=>setShowMobileMenu(!showMobileMenu)}>
            HERRAMIENTAS
          </MenuItem>

          <MenuItem onClick={()=>setShowMobileMenu(!showMobileMenu)}>
            Biblioteca TECHO
          </MenuItem>

        </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  )
}
