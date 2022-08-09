import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../ComponenteReutilizable/Header'
import { Title } from '../Title/Title'
import { SectionArea, SectionAreaItems, SectionAreaSubtilte, SectionContainerArea, SectionHoverSubtilte, SectionImg } from './Areas.elements'


export const Areas = () => {
  return (
    <>
    <Header
    headerImg={'https://techo.org/wp-content/uploads/2021/11/destacada-para-noticias.png'}
    title='Areas'/>
    <Title
    title='TECHO AREAS'/>


    <SectionArea>
      <SectionContainerArea>
        <SectionAreaItems>
        <Link to='/areas/adminyfinanzas'>
          <SectionImg src='https://techo.org/wp-content/uploads/2021/11/destacada-para-noticias.png'/>
          <SectionHoverSubtilte>
            <SectionAreaSubtilte>Administración</SectionAreaSubtilte>

          </SectionHoverSubtilte>
        </Link>
        </SectionAreaItems>

      <SectionAreaItems>
        <Link to='/areas/legales'>
          <SectionImg src='https://techo.org/wp-content/uploads/2021/11/destacada-para-noticias.png'/>
          <SectionHoverSubtilte>
            <SectionAreaSubtilte>Legales</SectionAreaSubtilte>

          </SectionHoverSubtilte>
        </Link>
        </SectionAreaItems>
        <SectionAreaItems>
        <Link to='/areas/fondos'>
          <SectionImg src='https://techo.org/wp-content/uploads/2021/11/destacada-para-noticias.png'/>
          <SectionHoverSubtilte>
            <SectionAreaSubtilte> Desarrollo de fondos</SectionAreaSubtilte>

          </SectionHoverSubtilte>
        </Link>
        </SectionAreaItems>
      <SectionAreaItems>
        <Link to='/areas/comunicacion'>
          <SectionImg src='https://techo.org/wp-content/uploads/2021/11/destacada-para-noticias.png'/>
          <SectionHoverSubtilte>
           <SectionAreaSubtilte> Comunicacion</SectionAreaSubtilte>

          </SectionHoverSubtilte>
        </Link>
        </SectionAreaItems>
      <SectionAreaItems>
        <Link to='/areas/viviendas'>
          <SectionImg src='https://techo.org/wp-content/uploads/2021/11/destacada-para-noticias.png'/>
          <SectionHoverSubtilte>
            <SectionAreaSubtilte>Vivienda</SectionAreaSubtilte>

          </SectionHoverSubtilte>
        </Link>
        </SectionAreaItems>
      <SectionAreaItems>
        <Link to='/areas/gestion'>
          <SectionImg src='https://techo.org/wp-content/uploads/2021/11/destacada-para-noticias.png'/>
          <SectionHoverSubtilte>
            <SectionAreaSubtilte>Gestion Comunitaria</SectionAreaSubtilte>
          </SectionHoverSubtilte>
        </Link>
        </SectionAreaItems>
      <SectionAreaItems>
        <Link to='/areas/voluntariado'>
          <SectionImg src='https://techo.org/wp-content/uploads/2021/11/destacada-para-noticias.png'/>
          <SectionHoverSubtilte>
           <SectionAreaSubtilte>Voluntariado</SectionAreaSubtilte>

          </SectionHoverSubtilte>
        </Link>
        </SectionAreaItems>
      
        <SectionAreaItems>
        <Link to='/areas/investigacion'>
          <SectionImg src='https://techo.org/wp-content/uploads/2021/11/destacada-para-noticias.png'/>
          <SectionHoverSubtilte>
            <SectionAreaSubtilte>Investigación</SectionAreaSubtilte>

          </SectionHoverSubtilte>
        </Link>
        </SectionAreaItems>
  
      </SectionContainerArea>
      
    </SectionArea>

    </>
  )
}
