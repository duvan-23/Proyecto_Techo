import React from 'react'
import { Cards, ContainerCard, DivGrid, DivGrid2, ImgCard, SpanCard, TextCard, TitleCard } from './CardMainPage.elements'

export const CardMainPage = ({title,img,text,phrase}) => {
  return (
    <ContainerCard>
        <Cards>
            <DivGrid>
                <ImgCard src={img} />
            </DivGrid>
            <DivGrid2>
              <TitleCard>{title}</TitleCard>
              <TextCard>{text}</TextCard>
              <SpanCard>"{phrase}"</SpanCard>
            </DivGrid2>
        </Cards>
    </ContainerCard>
  )
}
