import React from "react"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import ContactModal from "../components/ContactFormModal"

import SEO from "./seo"

import "./layout.css"
import "bootstrap/dist/css/bootstrap-grid.css"

const Primary = styled.main`
  padding: 150px 0 100px;
  padding-left: 5vw !important;
  padding-right: 5vw !important;
  min-height: 100%;
  /* min-height: calc(100vh - 12vh); */
  /* height: 100vh; */

  @media screen and (max-width: 992px) {
    padding: 100px 0 0px;
  }

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
      <Primary id="primary" className="container-fluid content-area">
        <section id="main" className="site-main" role="main">
          {children}
        </section>
      </Primary>
      <ContactModal />
      <Footer />
    </>
  )
}

export default Layout
