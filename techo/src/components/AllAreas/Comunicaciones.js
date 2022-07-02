import React from 'react'
import { CardMainPage } from '../CardMainPage/CardMainPage'
import { Header } from '../ComponenteReutilizable/Header'
import { Title } from '../Title/Title'

export const Comunicaciones = () => {
  return (
    <>
        <Header 
        headerImg='https://static.vecteezy.com/system/resources/previews/001/861/926/non_2x/abstract-neon-shapes-hologram-free-photo.jpg'
        />
        <Title title='Comunicaciones'/>
        <CardMainPage
        title='Area Comunicaciones'
        text='“Somos una organización conformada por jóvenes voluntarios y voluntarias junto con habitantes de asentamientos populares de América Latina."'/>
    </>
  )
}
