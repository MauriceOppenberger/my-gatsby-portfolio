import React from "react"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import ContactModal from "../components/ContactFormModal"

import SEO from "./seo"

import "./layout.css"
import "bootstrap/dist/css/bootstrap-grid.css"

const Primary = styled.main`
  padding: 125px 0px 100px 0px;

  min-height: 73vh !important;

  @media screen and (max-width: 992px) {
    padding: 56px 0px 0px 0px !important;
    min-height: 90vmax !important;
  }
  .site-main {
    margin-top: 1rem;
  }
`

const Layout = ({ children }) => {
  // const [menuOpen, setMenuOpen] = useState(false)

  // const handleOverlayMenu = () => {
  //   setMenuOpen(!menuOpen)
  // }
  return (
    <>
      <SEO title="Maurice Oppenberger" />
      <Header />
      <Primary id="primary" className="container-fluid content-area">
        <section id="main" className="site-main" role="main">
          {children}
        </section>
      </Primary>
      <ContactModal
        position="fixed"
        width="24px"
        height="24px"
        padding="16px"
      />
      <Footer />
    </>
  )
}

export default Layout
