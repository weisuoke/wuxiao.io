import * as React from 'react'
import { Link } from 'gatsby'
import { StyledTopnav } from './Elements'

const Topnav = () => {
  return (
    <StyledTopnav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </StyledTopnav>
  )
}

export default Topnav
