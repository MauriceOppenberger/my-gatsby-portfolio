import React, { useState } from "react"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import OverlayMenu from "./OverlayMenu"
import SEO from "./seo"

import "./layout.css"
import "bootstrap/dist/css/bootstrap-grid.css"
import Hamburger from "./Hamburger"

const Primary = styled.main`
  padding: 130px 0 0 0;
  margin: 0 auto;

  @media (min-width: 1200px) {
    /* max-width: 1024px !important; */
  }
`

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <SEO title="home" />
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Header />
      <Primary id="primary" className="container content-area">
        <main id="main" className="site-main" role="main">
          {children}
        </main>
      </Primary>
      <Footer />
    </>
  )
}

export default Layout
