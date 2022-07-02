import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { Container, LogoContainer, Menu, MenuItem, MobileIcon, Wrapper } from './NavBar.elements';
import { IconContext } from 'react-icons/lib';

import techoBlanco from '../../img/techoBlanco.png'
import '../../css/NavBar.css'
import { Link } from 'react-router-dom';



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

          <Link to="/">
            <MenuItem onClick={()=>setShowMobileMenu(!showMobileMenu)}>
              INICIO
            </MenuItem>
          </Link>
          <Link to="/areas/">
            <MenuItem onClick={()=>setShowMobileMenu(!showMobileMenu)}>
              AREAS
            </MenuItem>
          </Link>
          <Link to="/herramientas/">
            <MenuItem onClick={()=>setShowMobileMenu(!showMobileMenu)}>
              HERRAMIENTAS
            </MenuItem>
          </Link>
          <Link to="/biblioteca/">
            <MenuItem onClick={()=>setShowMobileMenu(!showMobileMenu)}>
              Biblioteca TECHO
            </MenuItem>
          </Link>

        </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  )
}
