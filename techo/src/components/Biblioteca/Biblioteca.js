import React from 'react'
import { CardMainPage } from '../CardMainPage/CardMainPage'
import { Header } from '../ComponenteReutilizable/Header'
import { Title } from '../Title/Title'
import Container from 'react-bootstrap/Container';   
import { Row, Col, Grid } from 'react-bootstrap';
import Iframe from 'react-iframe';
import $ from 'jquery';
import '../herramientas/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faExpand,faExternalLink } from '@fortawesome/free-solid-svg-icons';

export const Biblioteca = () => {
  return (
    <>
        <Header 
        headerImg={'https://techo.org/wp-content/uploads/2021/11/destacada-para-noticias.png'}
        title='Biblioteca'/>
        <Title title='Biblioteca'/>
        <CardMainPage
        title='Area Biblioteca Techo'
        img='https://techo.org/wp-content/uploads/2021/11/destacada-para-noticias.png'
        text='“Somos una organización conformada por jóvenes voluntarios y voluntarias junto con habitantes de asentamientos populares de América Latina."'/>
        <Container style={{position: 'relative'}}>
          <Row style={{margin: '50px 0px 0px 0px'}}>
            <Col md={12} className="m justify-content-md-center fluid margen archivos2 mb-5" onMouseEnter={() => $('#boton2').removeClass("ocultar2")} onMouseLeave={() => $('#boton2').addClass("ocultar2")}>
              <Iframe  className="archivos"src="https://drive.google.com/embeddedfolderview?id=10CvpNE35RMKaP-q2XbEtz0ik99LfOWP2#grid" style={{color: 'white !important'}} width="100%" height="310" frameborder="0"  scrolling="si"></Iframe>
                <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/drive/folders/10CvpNE35RMKaP-q2XbEtz0ik99LfOWP2?usp=sharing" className="ocultar2 enlace2" id="boton2"><FontAwesomeIcon className="icono" icon={faExternalLink} /></a>
            </Col>
          </Row>  
        </Container> 
    </>
  )
}