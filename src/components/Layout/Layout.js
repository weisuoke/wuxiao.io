import * as React from 'react'
import Topnav from "../Topnav";
import { StyledTopnavWrapper } from "./Elements";
import "./app.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <StyledTopnavWrapper>
      <title>{pageTitle}</title>
      <Topnav />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </StyledTopnavWrapper>
  )
}
export default Layout
