import React from 'react'
import { HeaderHeader, HeaderImg, HeaderTitle } from './Header.elements'

export const Header = ({headerImg , title}) => {
  return (
    <HeaderHeader>
        <HeaderImg src={headerImg}/>
        <HeaderTitle>
            {title}
        </HeaderTitle>
    </HeaderHeader>
  )
}
