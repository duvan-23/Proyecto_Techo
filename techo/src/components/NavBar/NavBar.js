import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import techoBlanco from '../../img/techoBlanco.png'
import { Container, LogoContainer, Menu, MenuItem, MobileIcon, Wrapper } from './NavBar.elements';
import '../../css/NavBar.css'
import { IconContext } from 'react-icons/lib';
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
          <MenuItem>
            Inicio
          </MenuItem>

          <MenuItem>
            Areas
          </MenuItem>

          <MenuItem>
            Biblioteca TECHO
          </MenuItem>

          <MenuItem>
            Comites
          </MenuItem>

          <MenuItem>
            Plan Estrategico
          </MenuItem>

          <MenuItem>
            sg-sst
          </MenuItem>
        </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  )
}
