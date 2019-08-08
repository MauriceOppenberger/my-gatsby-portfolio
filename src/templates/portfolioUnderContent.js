import React from "react"
import Layout from "../components/layout"
import PortfolioItems from "../components/PortfolioItems"
import SEO from "../components/seo"

const portfolioUnderContent = ({ pageContext }) => (
  <Layout>
    <SEO title="Portfolio Page" />
    <div className="container">
      <h1>{pageContext.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
      <PortfolioItems />
    </div>
  </Layout>
)

export default portfolioUnderContent
