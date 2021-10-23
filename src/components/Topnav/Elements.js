import styled from 'styled-components'
import {Link} from 'gatsby'

export const StyledTopnav = styled.nav`
  height: 50px;
  display: flex;
  box-shadow: 0 4px 10px rgb(0 0 0 / 5%);
  padding: 0 64px;
`

export const StyledLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 5px;
  margin-right: 16px;
`

export const StyledMenuItem = styled(Link)`
  padding: 15px;
  cursor: pointer;
  color: #4a4a4a;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &:hover, &:active {
    color: #3273dc;
  }
  
  &:hover {
    background-color: #fafafa;
  }
`
