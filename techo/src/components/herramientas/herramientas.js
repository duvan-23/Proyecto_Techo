// import { NavBar } from '../NavBar/NavBar'
import Container from 'react-bootstrap/Container';   
import { Row, Col, Grid } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faExpand,faExternalLink } from '@fortawesome/free-solid-svg-icons'
import Iframe from 'react-iframe'
import $ from 'jquery';
import './styles.css';
import { Title } from '../Title/Title';
import { Header } from '../ComponenteReutilizable/Header';
const herramientas = () => {

  return (
    <>
      {/* <NavBar pagina={"/herramientas"} /> */}
      {/* <Logout/> */}

      <Header
      headerImg={'https://fondosmil.com/fondo/38782.jpg'}
      title='HERRAMIENTAS'/>
      <Container style={{position: 'relative'}}>
        <Row style={{margin: '50px 0px 0px 0px'}}>
          <Col md={12} className="m" >
            <Title
            title='Agenda de actividades'/>
          </Col>
          <Col md={12} className="m justify-content-md-center fluid margen" onMouseEnter={() => $('#boton').removeClass("ocultar")} onMouseLeave={() => $('#boton').addClass("ocultar")}>
            {/* <a rel="noopener noreferrer" target="_blank" href="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%230092dd&ctz=America%2FBogota&src=bXRkdnFwa3Y2YjZxZ212ZjBhZWE2dmpxajRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237CB342" className="float-end ocultar enlace"  id="boton"><FontAwesomeIcon className="icono" icon={faExternalLink} /></a> */}
            <Iframe  src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%230092dd&ctz=America%2FBogota&src=bXRkdnFwa3Y2YjZxZ212ZjBhZWE2dmpxajRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237CB342"  width="100%" height="600px" frameborder="0" scrolling="no" title="myFrame" className="calendar"></Iframe>
            <a rel="noopener noreferrer" target="_blank" href="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%230092dd&ctz=America%2FBogota&src=bXRkdnFwa3Y2YjZxZ212ZjBhZWE2dmpxajRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237CB342" className="ocultar enlace"  id="boton"><FontAwesomeIcon className="icono" icon={faExternalLink} /></a>
          </Col>
        </Row>  
      </Container>  
      <Container style={{position: 'relative'}}>
        <Row style={{margin: '50px 0px 0px 0px'}}>
          {/* <Col md={1} className="m justify-content-md-center fluid mt-4" >
          </Col> */}
          <Col md={12} className="m justify-content-md-center fluid margen archivos2 mb-5" onMouseEnter={() => $('#boton2').removeClass("ocultar2")} onMouseLeave={() => $('#boton2').addClass("ocultar2")}>
            {/* <a rel="noopener noreferrer" target="_blank" href="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%230092dd&ctz=America%2FBogota&src=bXRkdnFwa3Y2YjZxZ212ZjBhZWE2dmpxajRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237CB342" className="float-end ocultar enlace"  id="boton"><FontAwesomeIcon className="icono" icon={faExternalLink} /></a> */}
            <Iframe  className="archivos"src="https://drive.google.com/embeddedfolderview?id=1aI6tDW_Tp9quPEgo4B5pRAkhc-MMhRBY#grid" style={{color: 'white !important'}} width="100%" height="310" frameborder="0"  scrolling="si"></Iframe>
              <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/drive/folders/1aI6tDW_Tp9quPEgo4B5pRAkhc-MMhRBY?usp=sharing" className="ocultar2 enlace2" id="boton2"><FontAwesomeIcon className="icono" icon={faExternalLink} /></a>
          </Col>
        </Row>  
      </Container>              
    </>

  );
};
export default herramientas;