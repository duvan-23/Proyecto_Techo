import React from 'react'
import { CardAreas, CardAreasCard, CardAreasContent, CardAreasFront, CardAreasImg, CardAreasTitle } from './CardsAreas.elements'

export const CardsAreas = ({area}) => {
  return (
    <CardAreas>
        
            <CardAreasCard>
                <CardAreasFront >
                    <CardAreasContent>
                        <CardAreasTitle>
                            {area} 
                        </CardAreasTitle>
                    </CardAreasContent>
                </CardAreasFront>
            </CardAreasCard>
        
    </CardAreas>
  )
}
