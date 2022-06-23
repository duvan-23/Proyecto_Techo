import React from 'react'
import { Carrousel } from '../Carrousel/Carrousel'
import { ContainerMainPage, ContainerMarca,  LogoMainPage, Phrase, TitleMainPage } from './MainPage.elements'

import logoTecho from '../../img/logoTecho.png'
import { CardMainPage } from '../CardMainPage/CardMainPage'
import { ContainerCardsAreas } from '../ContainerCardAreas/ContainerCardsAreas'
import { Title } from '../Title/Title'

export const MainPage = () => {
  return (
    <>
        <Carrousel/>
        <Title
        title='TECHO URUGUAY'/>
        <CardMainPage
        title='¿Quiénes somos?'
        img='https://elheraldoslp.com.mx/wp-content/uploads/2020/03/4-1-6.jpg'
        phrase='INSERTE UNA FRASE' 
        text='“Somos una organización conformada por jóvenes voluntarios y voluntarias junto con habitantes de asentamientos populares de América Latina.
        
        Mediante nuestra acción conjunta, trabajamos en superar la situación de pobreza en la que viven millones de personas”'
        />
        <ContainerMainPage>
             <ContainerMarca>
                 <LogoMainPage src={logoTecho} />
                 <Phrase>"Por un pais sin pobreza"</Phrase>
             </ContainerMarca>  
         </ContainerMainPage> 
         <ContainerCardsAreas/>
        <CardMainPage
        title='Como ser voluntario'
        img='https://img.freepik.com/foto-gratis/gente-ayudando-plantar-arboles_34152-2394.jpg?w=2000'
        phrase='INSERTE UNA FRASE' 
        text='“Somos una organización conformada por jóvenes voluntarios y voluntarias junto con habitantes de asentamientos populares de América Latina.

        Mediante nuestra acción conjunta, trabajamos en superar la situación de pobreza en la que viven millones de personas”'
         />
        
    </>
  )
}
