import React from "react"
import Layout from "../components/layout"
import PortfolioItems from "../components/PortfolioItems"
import { PageWrapper } from "./styles/Page"
import ContactForm from "../components/ContactForm"
import SEO from "../components/seo"
import styled from "styled-components"
import DOMPurify from "dompurify"

const PortfolioListWrapper = styled.div`
  width: 95vw;
  max-width: 1280px;
  margin: 0 auto 5rem auto;

  h3 {
    font-size: 1.5rem;
    color: #4a4949;
    /* max-width: 45vw; */
    margin: auto;
    text-align: center;
  }
`

const portfolioUnderContent = ({ pageContext }) => {
  const cleanHtml = DOMPurify.sanitize
  return (
    <Layout>
      <SEO title="Portfolio Page" />
      <PageWrapper>
        <div className="about">
          <h1
            dangerouslySetInnerHTML={{
              __html: cleanHtml(pageContext.title, {
                SAFE_FOR_JQUERY: true,
              }),
            }}
          />

          <div
            dangerouslySetInnerHTML={{
              __html: cleanHtml(pageContext.content, {
                SAFE_FOR_JQUERY: true,
              }),
            }}
          />
        </div>
        <PortfolioListWrapper>
          <h3>--- Projects I've been working on ---</h3>
          <PortfolioItems />
        </PortfolioListWrapper>
        <div className="contact">
          <h1>Get in touch!</h1>

          <p className="status">
            I am always open to new opportunities and cool projects!
          </p>

          <ContactForm />
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default portfolioUnderContent
