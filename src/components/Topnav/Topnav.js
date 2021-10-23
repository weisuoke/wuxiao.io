import * as React from 'react'
import {StyledTopnav, StyledMenuItem, StyledLogo} from './Elements'
import Logo from './logo.png'

const Topnav = () => {
  return (
    <StyledTopnav>
      <StyledLogo src={Logo} alt=""/>
      <StyledMenuItem to="/">Home</StyledMenuItem>
      <StyledMenuItem to="/article">Article</StyledMenuItem>
      <StyledMenuItem to="/gallery">Gallery</StyledMenuItem>
      <StyledMenuItem to="/about">About</StyledMenuItem>
    </StyledTopnav>
  )
}

export default Topnav
