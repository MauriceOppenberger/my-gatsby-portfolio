import React from "react"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"

import SEO from "./seo"

import "./layout.css"
import "bootstrap/dist/css/bootstrap-grid.css"

const Primary = styled.main`
  padding-top: 150px;
  min-height: calc(100vh - 9vh);

  @media (min-width: 1400px) {
    /* max-width: 1370px !important; */
  }
`

const Layout = ({ children }) => {
  // const [menuOpen, setMenuOpen] = useState(false)

  // const handleOverlayMenu = () => {
  //   setMenuOpen(!menuOpen)
  // }
  return (
    <>
      <SEO title="home" />
      <Header />
      <Primary id="primary" className="container content-area">
        <section id="main" className="site-main" role="main">
          {children}
        </section>
      </Primary>
      <Footer />
    </>
  )
}

export default Layout
