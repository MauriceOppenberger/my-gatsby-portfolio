import React from "react"
import Layout from "../components/layout"
import PortfolioItems from "../components/PortfolioItems"
import { PageWrapper } from "./styles/Page"
import ContactForm from "../components/ContactForm"
import SEO from "../components/seo"
import styled from "styled-components"
import ContactModal from "../components/ContactFormModal"

const PortfolioListWrapper = styled.div`
  width: 95vw;
  max-width: 1280px;
  margin: 0 auto 5rem auto;

  h2 {
    opacity: 0.5;
  }
`

const portfolioUnderContent = ({ pageContext }) => (
  <Layout>
    <SEO title="Portfolio Page" />
    <PageWrapper>
      <div className="about">
        <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />

        <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      </div>
      <PortfolioListWrapper>
        <h2>My Projects</h2>
        <PortfolioItems />
      </PortfolioListWrapper>
      <div className="contact">
        <h1>Get in touch!</h1>

        <p className="status">
          I am always open to new opportunities and cool projects!
        </p>
        {/* <ContactModal margin="0" width="48px" height="48px" padding="0px" /> */}

        <ContactForm />
      </div>
    </PageWrapper>
  </Layout>
)

export default portfolioUnderContent
