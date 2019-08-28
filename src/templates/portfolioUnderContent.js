import React from "react"
import Layout from "../components/layout"
import PortfolioItems from "../components/PortfolioItems"
import SEO from "../components/seo"
import styled from "styled-components"

const PortfolioListWrapper = styled.div`
  width: 95vw;
  max-width: 1280px;
  margin: auto;
`

const portfolioUnderContent = ({ pageContext }) => (
  <Layout>
    <SEO title="Portfolio Page" />
    <PortfolioListWrapper>
      <h1>{pageContext.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
      <PortfolioItems />
    </PortfolioListWrapper>
  </Layout>
)

export default portfolioUnderContent
