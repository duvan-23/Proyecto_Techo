import React from 'react'
import { CardsAreas } from '../CardsAreas/CardsAreas'
import { CardsAreasSection } from './ContainerCardsAreas.elements'


export const ContainerCardsAreas = () => {
  return (
    <CardsAreasSection>

        <CardsAreas
        area='Administracion'
        />

        <CardsAreas
        area='Herramientas'
         />

        <CardsAreas
        area='Biblioteca'
        />

    </CardsAreasSection>
  )
}
