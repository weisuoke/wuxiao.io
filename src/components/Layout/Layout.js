import * as React from 'react'
import Topnav from "../Topnav";
import { StyledTopnavWrapper } from "./Elements";
import "./app.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Topnav />
      <StyledTopnavWrapper>
        <title>{pageTitle}</title>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </StyledTopnavWrapper>
    </div>
  )
}
export default Layout
