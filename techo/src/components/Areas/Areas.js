import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../ComponenteReutilizable/Header'
import { Title } from '../Title/Title'
import { SectionArea, SectionAreaItems, SectionAreaSubtilte, SectionContainerArea, SectionHoverSubtilte, SectionImg } from './Areas.elements'


export const Areas = () => {
  return (
    <>
    <Header
    headerImg={'https://fondosmil.com/fondo/38783.jpg'}
    title='Areas'/>
    <Title
    title='TECHO AREAS'/>


    <SectionArea>
      <SectionContainerArea>
        <SectionAreaItems>
        <Link to='/areas/adminyfinanzas'>
          <SectionImg src='https://i.pinimg.com/originals/db/b6/90/dbb69036f55e716526a6554a9514e3ed.jpg'/>
          <SectionHoverSubtilte>
            <SectionAreaSubtilte>Administración</SectionAreaSubtilte>

          </SectionHoverSubtilte>
        </Link>
        </SectionAreaItems>

      <SectionAreaItems>
        <Link to='/areas/legales'>
          <SectionImg src='https://i.pinimg.com/originals/db/b6/90/dbb69036f55e716526a6554a9514e3ed.jpg'/>
          <SectionHoverSubtilte>
            <SectionAreaSubtilte>Legales</SectionAreaSubtilte>

          </SectionHoverSubtilte>
        </Link>
        </SectionAreaItems>
        <SectionAreaItems>
        <Link to='/areas/fondos'>
          <SectionImg src='https://i.pinimg.com/originals/db/b6/90/dbb69036f55e716526a6554a9514e3ed.jpg'/>
          <SectionHoverSubtilte>
            <SectionAreaSubtilte> Desarrollo de fondos</SectionAreaSubtilte>

          </SectionHoverSubtilte>
        </Link>
        </SectionAreaItems>
      <SectionAreaItems>
        <Link to='/areas/comunicacion'>
          <SectionImg src='https://i.pinimg.com/originals/db/b6/90/dbb69036f55e716526a6554a9514e3ed.jpg'/>
          <SectionHoverSubtilte>
           <SectionAreaSubtilte> Comunicacion</SectionAreaSubtilte>

          </SectionHoverSubtilte>
        </Link>
        </SectionAreaItems>
      <SectionAreaItems>
        <Link to='/areas/viviendas'>
          <SectionImg src='https://i.pinimg.com/originals/db/b6/90/dbb69036f55e716526a6554a9514e3ed.jpg'/>
          <SectionHoverSubtilte>
            <SectionAreaSubtilte>Vivienda</SectionAreaSubtilte>

          </SectionHoverSubtilte>
        </Link>
        </SectionAreaItems>
      <SectionAreaItems>
        <Link to='/areas/gestion'>
          <SectionImg src='https://i.pinimg.com/originals/db/b6/90/dbb69036f55e716526a6554a9514e3ed.jpg'/>
          <SectionHoverSubtilte>
            <SectionAreaSubtilte>Gestion Comunitaria</SectionAreaSubtilte>
          </SectionHoverSubtilte>
        </Link>
        </SectionAreaItems>
      <SectionAreaItems>
        <Link to='/areas/voluntariado'>
          <SectionImg src='https://i.pinimg.com/originals/db/b6/90/dbb69036f55e716526a6554a9514e3ed.jpg'/>
          <SectionHoverSubtilte>
           <SectionAreaSubtilte>Voluntariado</SectionAreaSubtilte>

          </SectionHoverSubtilte>
        </Link>
        </SectionAreaItems>
      
        <SectionAreaItems>
        <Link to='/areas/investigacion'>
          <SectionImg src='https://i.pinimg.com/originals/db/b6/90/dbb69036f55e716526a6554a9514e3ed.jpg'/>
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
