import React from "react"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import ContactModal from "../components/ContactFormModal"

import SEO from "./seo"

import "./layout.css"
import "bootstrap/dist/css/bootstrap-grid.css"

const Primary = styled.main`
  padding: 150px 0px 100px 0px;

  min-height: 73vh !important;

  @media screen and (max-width: 992px) {
    padding: 75px 0px 0px 0px !important;
    min-height: 90vh !important;
  }
`

const Layout = ({ children }) => {
  // const [menuOpen, setMenuOpen] = useState(false)

  // const handleOverlayMenu = () => {
  //   setMenuOpen(!menuOpen)
  // }
  return (
    <>
      <SEO />
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
