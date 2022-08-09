import React from 'react'

import { ContainerMainPage, ContainerMarca,  Header,  LogoMainPage, Phrase, TitleMainPage } from './MainPage.elements'

import logoTecho from '../../img/logoTecho.png'
import { CardMainPage } from '../CardMainPage/CardMainPage'
import { ContainerCardsAreas } from '../ContainerCardAreas/ContainerCardsAreas'
import { Title } from '../Title/Title'

export const MainPage = () => {
  return (
    <>
       <Header/>
        <Title
        title='TECHO URUGUAY'/>
        <CardMainPage
        title='¿Quiénes somos?'
        img='https://techo.org/wp-content/uploads/2021/11/destacada-para-noticias.png'
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
        img='https://techo.org/wp-content/uploads/2021/11/destacada-para-noticias.png'
        phrase='INSERTE UNA FRASE' 
        text='“Somos una organización conformada por jóvenes voluntarios y voluntarias junto con habitantes de asentamientos populares de América Latina.

        Mediante nuestra acción conjunta, trabajamos en superar la situación de pobreza en la que viven millones de personas”'
         />
        
    </>
  )
}
